import { Text } from '@react-pdf/renderer'

// Define serializers for HTML rendering
const serializers = {
  types: {
    text: props => <span>{props.content}</span>,
    strong: props => (
      <span className="font-bold text-amber-400">{props.content}</span>
    )
  }
}

// Define serializers for PDF rendering
const serializersPDF = {
  types: {
    text: props => <Text>{props.content}</Text>,
    strong: props => <Text style={{ fontWeight: 'bold' }}>{props.content}</Text>
  }
}

// A function to render blocks using the provided serializers
function renderBlock(block, _serializers) {
  const BlockComponent = _serializers.types[block._type]
  if (!BlockComponent) {
    console.warn(`No serializer defined for ${block._type}`)
    return null
  }
  return <BlockComponent key={block.content} {...block} />
}

// Exported component for HTML content rendering
export const BlockContent = ({ blocks }) => {
  return <span>{blocks.map(block => renderBlock(block, serializers))}</span>
}

// Exported component for PDF content rendering
export const BlockContentPDF = ({ blocks }) => {
  return <Text>{blocks.map(block => renderBlock(block, serializersPDF))}</Text>
}
