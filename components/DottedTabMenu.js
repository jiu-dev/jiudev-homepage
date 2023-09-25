import React from 'react'

const DottedTabMenu = ({
  children,
  selectedTab,
  setSelectedTab,
  itemsByMenu
}) => {
  //Number of Item for each Menu
  const splitArrayInChunks = chunkSize => {
    let result = []
    for (let i = 0; i < React.Children.count(children); i += chunkSize) {
      result.push(React.Children.toArray(children).slice(i, i + chunkSize))
    }
    return result
  }

  const renderDottedTabMenu = c => {
    return c.map((item, byTwoIndex) => {
      const chunkSize = item.length
      return (
        <div className="relative font-thin">
          <div className="flex flex-col z-40">
            {React.Children.map(item, (child, index) =>
              React.cloneElement(child, {
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

DottedTabMenu.Item = props => (
  <>
    <div className="relative flex gap-6">
      {!props.isLast && (
        <div className="absolute w-3 h-full bg-white top-3 left-3 -translate-x-1/2"></div>
      )}
      {!props.isLast && (
        <div className="absolute w-1 h-full bg-indigo-300 z-20 top-3 left-3 -translate-x-1/2"></div>
      )}
      <div className="relative flex-none w-6 h-6">
        <div className="absolute w-6 h-6 bg-white rounded-full z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div
          className={`absolute w-4 h-4 bg-indigo-300 rounded-full z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            !props.isActive ? 'cursor-pointer' : ''
          }`}
          onClick={props.onClick}
        ></div>

        {props.isActive && (
          <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20"></div>
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
        <div className="absolute w-3 h-8 bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-1 h-8 bg-indigo-300 z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
      </div>
    )}
  </>
)

export default DottedTabMenu
