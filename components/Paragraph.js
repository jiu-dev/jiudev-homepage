const Paragraph = ({ children, ...props }) => (
  <span className={`font-thin text-sm text-justify ${props.className}`}>
    {children}
  </span>
)

export default Paragraph
