const Mail = ({ color, size = "20" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20C21.1 4 22 4.90002 22 6V18C22 19.1 21.1 20 20 20H4C2.90002 20 2 19.1 2 18L2.01001 6C2.01001 4.90002 2.90002 4 4 4ZM12 13L20 8V6L12 11L4 6V8L12 13Z" fill={color} fill-opacity="0.75" />
    </svg>

  )
}

export default Mail;