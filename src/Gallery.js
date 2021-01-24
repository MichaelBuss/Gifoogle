import Image from "./Image";

const Gallery = (props) => {
  if (props.gifs.length > 0) {
    const gifs = props.gifs;

    return (
      <div className="image-grid">
        {gifs.map((gif) => (
          <Image key={gif.id} id={gif.id} url={gif.images.original.url} caption={props.caption} captionPlacement={props.captionPlacement} alt={gif.title} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>No images to show</p>
      </div>
    );
  }
};

export default Gallery;
