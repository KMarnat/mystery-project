import giraffeAvatar from '../../assets/giraffeAvatar.svg';
import giraffeSmall from '../../assets/giraffeSmall.svg';
import AvatarGallery from '../AvatarGallery/AvatarGallery';
import Button from '../Button/Button';
import { images, images2, images3, images4, images5 } from './utils/images';

const ChangeAvatar = () => {
  return (
    <div className="change-image">
      <img src={giraffeAvatar} alt="current profile avatar" className="change-image__main" />
      <Button modifier="secondary">Remove Avatar</Button>
      <div className="gallery">
        <p className="gallery__title">Your avatar history</p>
        <div className="gallery__grid">
          <div className="gallery__image">
            <label htmlFor="avatar">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="gallery__upload"
              />
              +
            </label>
          </div>
          <div className="gallery__image">
            <img src={giraffeSmall} alt="" />
          </div>
          <div className="gallery__image"></div>
          <div className="gallery__image"></div>
          <div className="gallery__image"></div>
          <div className="gallery__image"></div>
        </div>
      </div>
      <AvatarGallery title={images.title} images={images.images}></AvatarGallery>
      <AvatarGallery title={images2.title} images={images2.images}></AvatarGallery>
      <AvatarGallery title={images3.title} images={images3.images}></AvatarGallery>
      <AvatarGallery title={images4.title} images={images4.images}></AvatarGallery>
      <AvatarGallery title={images5.title} images={images5.images}></AvatarGallery>
    </div>
  );
};

export default ChangeAvatar;