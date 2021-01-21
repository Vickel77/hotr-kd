const Cith = ({ color, size = "17" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.99 8C10.99 9.65997 9.66003 11 8 11C6.33997 11 5 9.65997 5 8C5 6.34003 6.33997 5 8 5C9.66003 5 10.99 6.34003 10.99 8ZM18.99 8C18.99 9.65997 17.66 11 16 11C14.34 11 13 9.65997 13 8C13 6.34003 14.34 5 16 5C17.66 5 18.99 6.34003 18.99 8ZM8 13C5.67004 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM15.03 13.05C15.38 13.02 15.7101 13 16 13C18.3301 13 23 14.17 23 16.5V19H17V16.5C17 15.02 16.1901 13.89 15.03 13.05Z" fill={color} fill-opacity="1" />
    </svg>

  )
}

export default Cith;