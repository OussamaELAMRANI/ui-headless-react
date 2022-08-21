type SocialMediaType = "facebook" | "twitter";
type sizeType = "sm" | "md" | "lg" | "xl";
type variantType = "primary" | "secondary" | "success" | "danger" | "warning";

interface ButtonUiType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element | string;
  variant: variantType;
  pill?: boolean;
  withIcon?: boolean;
  size?: sizeType;
}
