import clsx from 'clsx'

const Capsule = ({ centerClassName, children, ...props }) => {
  return (
    <div className="flex items-stretch  rounded-3xl">
      <div className="w-10 self-stretch">
        <div className="w-10 h-full dark:bg-black/40 bg-indigo-300/40 border-l-4 border-y-4 dark:border-black border-white rounded-tl-3xl rounded-bl-3xl"></div>
      </div>
      <div className="dark:bg-black/40 bg-indigo-300/40 z-20">
        <div className={clsx('-ml-10 -mr-10 flex z-20', centerClassName)}>
          <span className={props.className}>{children}</span>
        </div>
      </div>
      <div className="w-10 self-stretch">
        <div className="w-10 h-full dark:bg-black/40 bg-indigo-300/40 border-r-4 border-y-4 dark:border-black border-white rounded-tr-3xl rounded-br-3xl"></div>
      </div>
    </div>
  )
}

export default Capsule
