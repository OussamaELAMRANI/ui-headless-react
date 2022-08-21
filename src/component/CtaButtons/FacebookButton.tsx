import React, { FC } from "react";
import Button from "@/ui/Button";
import { FacebookIcon } from "@/icon/FacebookIcon";

export const FacebookButton: FC<
  { size?: sizeType } & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ size, ...props }) => {
  return (
    <Button
      withIcon
      variant={"primary"}
      size={size}
      className={"facebook"}
      {...props}
    >
      <>
        <FacebookIcon />
        Facebook
      </>
    </Button>
  );
};
