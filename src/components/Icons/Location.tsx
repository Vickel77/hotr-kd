
const Location = ({ color, size = "20" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 4.69 15.3101 2 12 2C8.68994 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.90002 10.9 6 12 6C13.1 6 14 6.90002 14 8C14 9.09998 13.11 10 12 10C10.9 10 10 9.09998 10 8ZM5 22V20H19V22H5Z" fill={color} fill-opacity="1" />
    </svg>
  );
}

export default Location;