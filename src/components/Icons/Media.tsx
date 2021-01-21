const Media = ({ color, size = "15" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2H18V4H6V2ZM4 8H20V6H4V8ZM20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22H4C2.89999 22 2 21.1 2 20V12C2 10.9 2.89999 10 4 10H20ZM10 12.73L16 16L10 19.26V12.73Z" fill={color} fill-opacity="1" />
    </svg>

  )
}
export default Media;