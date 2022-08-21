type SocialMediaType = "facebook" | "twitter";

interface ButtonUiTupe
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element | string;
  variant: "primary" | "secondary" | "success" | "danger" | "warning";
  pill?: boolean;
  withIcon?: boolean;
}
