type ButtonProps = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "submit";
};

export default function Button({ type = "primary", ...props }: ButtonProps) {
  const button_types = {
    primary: () => <button {...props}></button>,
    secondary: () => <button {...props}></button>,
    submit: () => <button {...props}></button>,
  };
  return button_types[type]();
}
