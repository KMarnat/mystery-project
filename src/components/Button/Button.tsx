interface ButtonProps {
  modifier: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ modifier, children }) => {
  return <button className={`btn btn--${modifier}`}>{children}</button>;
};

export default Button;
