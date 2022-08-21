import { FC } from "react";
import style from "./button.module.css";
import classNames from "classnames";

const Button: FC<ButtonUiType> = ({
  children,
  variant,
  pill,
  withIcon = false,
  size = "md",
  ...props
}) => {
  const styles = props.className
    ?.split(" ")
    .map((cls) => style[cls] || cls)
    .join(" ")
    .trim();

  const clx = classNames(
    style.button,
    style[variant],
    style[size],
    { [style.pill]: pill },
    styles
  );

  return (
    <button type="button" {...props} className={clx}>
      {withIcon ? <span className={style.cta}>{children}</span> : children}
    </button>
  );
};

export default Button;
