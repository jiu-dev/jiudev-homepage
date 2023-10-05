import React, { useState } from 'react'
import Capsule from './Capsule'
import XIcon from './icons/XIcon'
import Link from 'next/link'

// MessageBubble component functions as a toast notification.
function MessageBubble({ message }) {
  const [isVisible, setIsVisible] = useState(true)

  // If the toast is set to be not visible, don't render it
  if (!isVisible) {
    return null
  }

  return (
    <Capsule size="sm" className=" pl-3 pr-6 py-2 font-thin">
      {/* Icon to manually dismiss the toast */}
      <XIcon
        onClick={() => setIsVisible(false)}
        className="w-5 inline mr-2 rounded-full dark:bg-amber-500/40 bg-indigo-300/40 dark:hover:bg-amber-500/80 hover:bg-indigo-300/80 cursor-pointer"
      />
      {message.map((item, index) => {
        if (item.type === 'text') {
          return <span key={index}>{item.value}</span>
        } else if (item.type === 'nextLink') {
          return (
            <Link key={index} className="link" href={item.url}>
              {item.value}
            </Link>
          )
        } else if (item.type === 'link') {
          return (
            <a key={index} className="link" href={item.url}>
              {item.value}
            </a>
          )
        } else {
          return null
        }
      })}
    </Capsule>
  )
}

export default MessageBubble
