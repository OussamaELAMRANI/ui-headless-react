import { FC } from "react";
import style from "./button.module.css";
import classNames from "classnames";

const Button: FC<ButtonUiTupe> = ({
  children,
  variant,
  pill,
  withIcon = false,
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
