import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  types: {
    text: props => <span>{props.node.content}</span>,
    strong: props => (
      <span className="font-bold text-amber-400">{props.node.content}</span>
    )
  }
}

const CustomBlockContent = ({ blocks }) => {
  return <BlockContent blocks={blocks} serializers={serializers} />
}

export default CustomBlockContent
