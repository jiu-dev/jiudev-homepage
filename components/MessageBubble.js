import React, { useState } from 'react'
import Capsule from './Capsule'
import XIcon from './icons/XIcon'

function MessageBubble({ message }) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <Capsule size="sm" className="text-white pl-3 pr-6 py-2 font-thin">
      <XIcon
        onClick={() => setIsVisible(false)}
        className="w-5 inline mr-2 rounded-full bg-indigo-300/40 hover:bg-indigo-300/80 cursor-pointer"
      />
      {message}
    </Capsule>
  )
}

export default MessageBubble
