import { useRef, useState, useEffect } from 'react';
import giraffeAvatar from '../../assets/giraffeAvatar.svg';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ProfileCard: React.FC = () => {
  const [avatarHeight, setAvatarHeight] = useState<number>(0);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const element = avatarRef.current;
      if (element) {
        const height = element.offsetHeight;
        setAvatarHeight(height);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <article className="profilecard">
        <div
          className="profilecard__avatar"
          ref={avatarRef}
          style={{ marginBottom: -avatarHeight / 2 + 8 }}
        >
          <div className="aspect-ratio">
            <div>
              <img src={giraffeAvatar} alt="profile avatar" />
            </div>
          </div>
        </div>
        <div className="profilecard__content">
          <div className="profilecard__user">
            <h3>ajj123</h3>
            <p>Alexander Juul Jakobsen</p>
          </div>
          <p className="profilecard__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quisque in mi consectetur
            tempor nulla turpis sagittis non. Tincidunt...
          </p>
          <Link to={'/profile/manage'}>
            <Button modifier="secondary">Manage My Profile</Button>
          </Link>
        </div>
      </article>
      <Link to={'/profile/challenges'}>
        <button className="profile__challenges">Challenges</button>
      </Link>
    </>
  );
};

export default ProfileCard;
