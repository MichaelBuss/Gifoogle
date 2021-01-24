const Image = (props) => {
  console.log(props.alt);
  const placementClasses = (placement) => {
    if (placement === "overlay-center-bottom") {
      return "overlay place-bottom";
    } else if (placement === "overlay-center-top") {
      return "image-grid-item overlay place-top";
    } else {
      return "place-bottom";
    }
  };
  return (
    <div className="image-container">
      <img
        className="image-grid-item"
        key={props.id}
        src={props.url}
        alt={props.alt}
      />
      <div
        className={`text-center ${placementClasses(props.captionPlacement)}`}
      >
        {props.caption}
      </div>
    </div>
  );
};

export default Image;
