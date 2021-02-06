const Download = ({ color, size, opacity }: any) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z"
        fill={color}
        fill-opacity={opacity}
      />
    </svg>
  );
};

export default Download;
