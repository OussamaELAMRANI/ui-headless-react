type SocialMediaType = "facebook" | "twitter";
type sizeType = "sm" | "md" | "lg" | "xl";

interface ButtonUiType
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element | string;
  variant: "primary" | "secondary" | "success" | "danger" | "warning";
  pill?: boolean;
  withIcon?: boolean;
  size?: sizeType;
}
