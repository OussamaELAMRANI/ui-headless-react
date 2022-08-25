import React, { FC } from "react";
import Button from "@/ui/Button";

export const CircularButton: FC<ButtonUiType> = ({
  size,
  variant,
  children,
  ...props
}) => {
  return (
    <Button
      withIcon
      variant={variant}
      size={size}
      {...props}
      className={"circular"}
      pill
    >
      {children}
    </Button>
  );
};
