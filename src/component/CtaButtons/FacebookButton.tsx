import { FC } from "react";
import Button from "../../ui/Button";
import { FacebookIcon } from "../../icon/FacebookIcon";

export const FacebookButton: FC = (prop) => {
  return (
    <Buttonss
      withIcon
      variant={"primary"}
      className={"facebook text-2xl"}
      {...prop}
    >
      <>
        <FacebookIcon />
        Facebook
      </>
    </Buttonss>
  );
};
