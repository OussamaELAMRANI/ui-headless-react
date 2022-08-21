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
  const clx = classNames(style.button, style[variant], { [style.pill]: pill });

  return (
    <button type='button' className={clx} {...props}>
      {withIcon ? <span className={style.cta}>{children}</span> : children}
    </button>
  );
};

export default Button;
