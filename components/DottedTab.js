import React, { Children } from 'react'
import Capsule from './Capsule'

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

const DottedTabTitle = ({ children }) => (
  <h3 className="text-3xl">{children}</h3>
)

const DottedTabSubtitle = ({ children }) => (
  <ul className="flex flex-wrap gap-4 mt-4 justify-center font-thin text-sm">
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isLast: index + 1 === React.Children.count(children)
      })
    )}
  </ul>
)

const DottedTabBody = ({ children }) => (
  <Capsule className="indent-6 font-thin text-sm text-justify p-6">
    {children}
  </Capsule>
)

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
