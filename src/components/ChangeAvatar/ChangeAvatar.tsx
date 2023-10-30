import { useUserContext } from '../../contexts/UserContext';
import { ChangeEvent, useState } from 'react';

import AvatarGallery from '../AvatarGallery/AvatarGallery';
import Button from '../Button/Button';
import { images, images2, images3, images4, images5 } from './utils/images';

const ChangeAvatar: React.FC = () => {
  const { avatar, setAvatar } = useUserContext();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleClick: React.MouseEventHandler<HTMLImageElement> = (e) => {
    setAvatar(e.currentTarget.src);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const fileList = Array.from(files);

      const filteredFiles = fileList.filter((file) =>
        selectedImages.every((selectedFile) => selectedFile.name !== file.name)
      );

      setSelectedImages([...filteredFiles, ...selectedImages]);
    }
  };

  console.log(selectedImages.length);

  const defaultImage =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  return (
    <div className="change-image">
      <div className="change-image__main">
        <img src={avatar} alt="current profile avatar" />
      </div>
      <Button
        modifier="secondary"
        onClick={() => avatar !== defaultImage && setAvatar(defaultImage)}
      >
        Remove Avatar
      </Button>
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
                multiple
                onChange={handleImageChange}
              />
              +
            </label>
          </div>
          {selectedImages.map((image, index) => (
            <div className="gallery__image" key={index}>
              <img src={URL.createObjectURL(image)} alt="" onClick={handleClick} />
            </div>
          ))}
          {selectedImages.length === 0 && <div className="gallery__image"></div>}
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
