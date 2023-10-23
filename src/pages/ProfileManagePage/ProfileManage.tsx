import { Link } from 'react-router-dom';
import profileAvatar from '../../assets/giraffeAvatar.svg';
import Button from '../../components/Button/Button';

const ProfileManage = () => {
  const userDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quisque in mi consectetur tempor nulla turpis sagittis non. Tincidunt...';

  return (
    <section className="profilemanage">
      <h3>Manage my profile</h3>
      <form className="profilemanage__form">
        <label htmlFor="">Change avatar</label>

        <div className="change-avatar">
          <img src={profileAvatar} alt="current profile avatar" className="change-avatar__image" />
          <p>Change avatar</p>
          <Link to={'/profile/manage/change-avatar'}>
            <button className="change-avatar__button">&#8594;</button>
          </Link>
        </div>

        <label htmlFor="">Username</label>
        <input type="text" value="ajj123" />

        <label htmlFor="">About</label>
        <textarea name="" id="" rows={3}>
          {userDescription}
        </textarea>

        <label htmlFor="">Email address</label>
        <input type="text" value="lenovo-user@gmail.com" />
      </form>
      <Button modifier="go">Save</Button>
    </section>
  );
};

export default ProfileManage;
