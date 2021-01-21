const Events = ({ color, size = "15" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2V4H8V2H6V4H5C3.89001 4 3.01001 4.89999 3.01001 6L3 20C3 21.1 3.89001 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.89999 20.1 4 19 4H18V2H16ZM17 13H12V18H17V13ZM5 20H19V9H5V20Z" fill={color} fill-opacity="1" />
    </svg>

  )
}

export default Events;