import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import Button from '../Button/Button';

const ProfileCard: React.FC = () => {
  const [avatarHeight, setAvatarHeight] = useState<number>(0);
  const avatarRef = useRef<HTMLDivElement>(null);
  const { username, fullName, avatar, about } = useUserContext();

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
              <img src={avatar} alt="profile avatar" />
            </div>
          </div>
        </div>
        <div className="profilecard__content">
          <div className="profilecard__user">
            {!username || !fullName ? (
              <h3>Click the button below to sign up</h3>
            ) : (
              <>
                <h3>{username}</h3>
                <p>{fullName}</p>
              </>
            )}
          </div>
          <p className="profilecard__description">{about}</p>
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
