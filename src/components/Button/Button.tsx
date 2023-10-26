interface ButtonProps {
  modifier: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ modifier, onClick, children }) => {
  return (
    <button className={`btn btn--${modifier}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
