const Capsule = ({ children }) => {
  return (
    <div className="flex items-stretch">
      <div className="w-10 self-stretch">
        <div className="w-10 h-full bg-indigo-300/40 border-l-4 border-y-4 border-white rounded-tl-3xl rounded-bl-3xl"></div>
      </div>
      <div className="flex bg-indigo-300/40">
        <div className="-ml-10 -mr-10 flex z-10">
          <span className="font-thin text-sm p-6 text-justify">{children}</span>
        </div>
      </div>
      <div className="w-10 self-stretch">
        <div className="w-10 h-full bg-indigo-300/40 border-r-4 border-y-4 border-white rounded-tr-3xl rounded-br-3xl"></div>
      </div>
    </div>
  )
}

export default Capsule
