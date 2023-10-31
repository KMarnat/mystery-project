import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import Button from '../../components/Button/Button';
import { ChangeEvent, useState } from 'react';

const ProfileManage = () => {
  const { username, fullName, avatar, email, about, setUsername, setFullName, setEmail, setAbout } =
    useUserContext();

  /* State that holds input field values. When "Save" button is clicked the values are sent into the UserContext */
  const [localValues, setLocalValues] = useState({
    username: username,
    fullName: fullName,
    email: email,
    about: about,
  });

  /* When input field values change, they are saved in state */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLocalValues({
      ...localValues,
      [name]: value,
    });
  };

  /* Click function for "Save" button. Saving values into the UserContext */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUsername(localValues.username);
    setFullName(localValues.fullName);
    setEmail(localValues.email);
    setAbout(localValues.about);
  };

  return (
    <section className="profilemanage">
      <h3>Manage my profile</h3>
      <form className="profilemanage__form">
        <label htmlFor="">Change avatar</label>

        <Link to={'/profile/manage/change-avatar'}>
          <div className="change-avatar">
            <img src={avatar} alt="current profile avatar" className="change-avatar__image" />
            <p className="change-avatar__title">Change avatar</p>
            <span className="change-avatar__arrow">&#8594;</span>
          </div>
        </Link>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Type your full name..."
          value={localValues.fullName}
          onChange={handleChange}
        />

        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Type your username..."
          value={localValues.username}
          onChange={handleChange}
        />

        <label htmlFor="">About</label>
        <textarea
          name="about"
          rows={3}
          placeholder="Tell us about yourself..."
          value={localValues.about}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="">Email address</label>
        <input
          type="text"
          name="email"
          placeholder="Type your email..."
          value={localValues.email}
          onChange={handleChange}
        />
      </form>
      <Button modifier="go" onClick={handleClick}>
        Save
      </Button>
    </section>
  );
};

export default ProfileManage;
