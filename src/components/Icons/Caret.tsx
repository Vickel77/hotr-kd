export const CaretRight = ({ color, size = "20" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13Z" fill={color} fill-opacity="1" />
    </svg>

  )
}

export const CaretLeft = ({ color, size = "20" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.51 3.87001L15.73 2.10001L5.83997 12L15.74 21.9L17.51 20.13L9.37997 12L17.51 3.87001Z" fill={color} fill-opacity="1" />
    </svg>

  );
}
