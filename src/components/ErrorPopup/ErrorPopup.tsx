import { Link } from 'react-router-dom';

interface ErrorPopupProps {
  modifier: string;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ modifier }) => {
  return (
    <dialog className={`error-popup ${modifier}`}>
      <div className="error-popup__message">
        <h5>Error</h5>
        <p>Add your email to proceed!</p>
      </div>
      <Link to={'/profile/manage'}>
        <button>{'>'}</button>
      </Link>
    </dialog>
  );
};

export default ErrorPopup;
