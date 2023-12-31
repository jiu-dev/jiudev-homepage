import React from 'react'

// The DottedTabMenu component represents a menu with interactive tab items.
const DottedTabMenu = ({
  children,
  selectedTab,
  setSelectedTab,
  itemsByMenu
}) => {
  // This function splits the provided array (children) into chunks of a specified size.
  const splitArrayInChunks = chunkSize => {
    let result = []
    for (let i = 0; i < React.Children.count(children); i += chunkSize) {
      result.push(React.Children.toArray(children).slice(i, i + chunkSize))
    }
    return result
  }

  // This function maps over the provided chunks and renders individual tab items.
  const renderDottedTabMenu = c => {
    return c.map((item, byTwoIndex) => {
      const chunkSize = item.length
      return (
        <div key={byTwoIndex} className="relative font-thin">
          <div className="flex flex-col z-40">
            {React.Children.map(item, (child, index) =>
              React.cloneElement(child, {
                key: index,
                isActive: byTwoIndex * chunkSize + index === selectedTab,
                isLast: (index + 1) % chunkSize === 0,
                onClick: () => setSelectedTab(byTwoIndex * chunkSize + index)
              })
            )}
          </div>
        </div>
      )
    })
  }
  return (
    <>
      {renderDottedTabMenu(
        splitArrayInChunks(itemsByMenu || React.Children.count(children))
      )}
    </>
  )
}

// Represents an individual menu item with a unique visual style.
DottedTabMenu.Item = props => (
  <>
    <div className="relative flex gap-6">
      {!props.isLast && (
        <div className="absolute w-3 h-full dark:bg-black bg-white top-3 left-3 -translate-x-1/2"></div>
      )}
      {!props.isLast && (
        <div className="absolute w-1 h-full dark:bg-amber-500 bg-indigo-300 z-20 top-3 left-3 -translate-x-1/2"></div>
      )}
      <div className="relative flex-none w-6 h-6">
        <div className="absolute w-6 h-6 dark:bg-black bg-white rounded-full z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className={`absolute w-4 h-4 dark:bg-amber-500 bg-indigo-300 rounded-full z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            !props.isActive ? 'cursor-pointer' : ''
          }`}
          onClick={props.onClick}
        ></div>

        {props.isActive && (
          <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white z-20"></div>
        )}
      </div>
      <div className={`relative opacity-0 font-bold`}>{props.children}</div>

      <div
        onClick={props.onClick}
        className={`cursor-pointer hover:underline underline-offset-8 absolute ml-12 shrink ${
          props.isActive ? 'font-bold' : 'font-thin'
        }`}
      >
        {props.children}
      </div>
    </div>
    {!props.isLast && (
      <div className="relative w-6 h-6">
        <div className="absolute w-3 h-8 dark:bg-black bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-1 h-8 dark:bg-amber-500 bg-indigo-300 z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
      </div>
    )}
  </>
)

export default DottedTabMenu
