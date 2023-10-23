interface AvatarGalleryProps {
  title: string;
  images: string[];
}

const AvatarGallery: React.FC<AvatarGalleryProps> = ({ title, images }) => {
  return (
    <div className="gallery">
      <p className="gallery__title">{title}</p>
      <div className="gallery__grid">
        {images.map((fluff) => (
          <div className="gallery__image">
            <img src={fluff} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarGallery;
