import React, { Children } from 'react'
import Capsule from './Capsule'

// DottedTab is a component that displays content based on tab selection
const DottedTab = ({ children }) => {
  let _body, _title, _subtitle

  Children.forEach(children, child => {
    if (child.type === DottedTabTitle) {
      return (_title = child)
    }

    if (child.type === DottedTabBody) {
      return (_body = child)
    }

    if (child.type === DottedTabSubtitle) {
      return (_subtitle = child)
    }
  })

  return (
    <div>
      <div className="px-10 mb-2">{_title}</div>
      {_body}
      {_subtitle}
    </div>
  )
}

// Represents the title component for the DottedTab.
const DottedTabTitle = ({ children }) => (
  <h3 className="text-3xl">{children}</h3>
)

// Represents the subtitle component for the DottedTab, which can contain multiple items.
const DottedTabSubtitle = ({ children }) => (
  <ul className="flex flex-wrap gap-4 mt-4 justify-center font-thin text-sm">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isLast: index + 1 === React.Children.count(children)
      })
    )}
  </ul>
)

// Represents the main body content of the DottedTab, wrapped in a 'Capsule' component.
const DottedTabBody = ({ children }) => (
  <Capsule className=" font-thin text-sm text-justify p-6">{children}</Capsule>
)

// Associating sub-components with the main DottedTab component for ease of use and clarity.
DottedTab.Title = DottedTabTitle
DottedTab.Subtitle = DottedTabSubtitle
DottedTab.Subtitle.Item = props => {
  return (
    <>
      <li>{props.children}</li>
      {!props.isLast && <span className="self-center">&bull;</span>}
    </>
  )
}
DottedTab.Body = DottedTabBody

export default DottedTab
