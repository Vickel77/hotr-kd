const ArrowUp = ({ color, size = "15" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.52 17.52 22 12 22C6.47998 22 2 17.52 2 12C2 6.48 6.47998 2 12 2C17.52 2 22 6.48 22 12ZM16 13L12 9L8 13L16 13Z" fill={color} fillOpacity="1" />
    </svg>

  )
}

export default ArrowUp;