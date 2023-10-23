import f1Img from '../../assets/game-images/fi-2.svg';
import legion from '../../assets/menu-icons/legion_icon.svg';

const ProfileChallenge = () => {
  return (
    <article className="profile-challenge">
      <img src={f1Img} alt="game poster" className="profile-challenge__poster" />
      <div className="profile-challenge__details">
        <p>
          <strong>F1® 23 Challenge</strong>
        </p>
        <div className="profile-challenge__company">
          <img src={legion} alt="" />
          <p>Lenovo</p>
        </div>
        <div className="profile-challenge__filters">
          <span className="fancy-label">Fastest Lap Time</span>
          <span className="fancy-label">Australia</span>
        </div>
      </div>
    </article>
  );
};

export default ProfileChallenge;
