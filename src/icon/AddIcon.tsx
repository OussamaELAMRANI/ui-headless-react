import { FC } from "react";

export const AddIcon: FC<{ fill?: string }> = ({ fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0001 5C10.5524 5 11.0001 5.44772 11.0001 6V9L14.0001 9C14.5524 9 15.0001 9.44772 15.0001 10C15.0001 10.5523 14.5524 11 14.0001 11H11.0001V14C11.0001 14.5523 10.5524 15 10.0001 15C9.44784 15 9.00012 14.5523 9.00012 14V11H6.00012C5.44784 11 5.00012 10.5523 5.00012 10C5.00012 9.44771 5.44784 9 6.00012 9L9.00012 9V6C9.00012 5.44772 9.44784 5 10.0001 5Z"
        fill={fill}
      />
    </svg>
  );
};
