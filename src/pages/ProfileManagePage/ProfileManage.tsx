import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import Button from '../../components/Button/Button';

const ProfileManage = () => {
  const { username, fullName, avatar, email, about, setUsername, setFullName, setEmail, setAbout } =
    useUserContext();

  return (
    <section className="profilemanage">
      <h3>Manage my profile</h3>
      <form className="profilemanage__form">
        <label htmlFor="">Change avatar</label>

        <div className="change-avatar">
          <img src={avatar} alt="current profile avatar" className="change-avatar__image" />
          <p>Change avatar</p>
          <Link to={'/profile/manage/change-avatar'}>
            <button className="change-avatar__button">&#8594;</button>
          </Link>
        </div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Type your full name..."
          value={fullName ? fullName : ''}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Type your username..."
          value={username ? username : ''}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">About</label>
        <textarea
          name=""
          id=""
          rows={3}
          placeholder="Tell us about yourself..."
          value={about ? about : ''}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>

        <label htmlFor="">Email address</label>
        <input
          type="text"
          placeholder="Type your email..."
          value={email ? email : ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <Button modifier="go">Save</Button>
    </section>
  );
};

export default ProfileManage;
