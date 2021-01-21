const CaretLeft = ({ color, size = "20" }: any) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.51 3.87001L15.73 2.10001L5.83997 12L15.74 21.9L17.51 20.13L9.37997 12L17.51 3.87001Z" fill={color} fill-opacity="1" />
    </svg>

  );
}

export default CaretLeft;