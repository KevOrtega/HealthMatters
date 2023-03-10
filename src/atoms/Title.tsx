type TitleProps = {
  children: React.ReactNode;
};

export default function Title(props: TitleProps) {
  return <h1 {...props} />;
}
