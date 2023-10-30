import { useUserContext } from '../../contexts/UserContext';

interface AvatarGalleryProps {
  title: string;
  images: string[];
}

const AvatarGallery: React.FC<AvatarGalleryProps> = ({ title, images }) => {
  const { setAvatar } = useUserContext();

  return (
    <div className="gallery">
      <p className="gallery__title">{title}</p>
      <div className="gallery__grid">
        {images.map((fluff, i) => (
          <div className="gallery__image" key={i}>
            <img src={fluff} alt="" onClick={(e) => setAvatar(e.currentTarget.src)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarGallery;
