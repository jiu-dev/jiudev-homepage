const Heading = ({ children, ...props }) => (
  <h3
    className={`text-lg mb-3 text underline underline-offset-8 decoration-4 ${props.className}`}
  >
    {children}
  </h3>
)

export default Heading
