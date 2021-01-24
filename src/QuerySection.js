import { useState } from "react";

const QuerySection = (props) => {
  const [query, setQuery] = useState("");
  const [caption, setCaption] = useState("");
  const [captionPlacement, setCaptionPlacement] = useState("below-center");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(query);
    props.caption(caption);
    props.captionPlacement(captionPlacement);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={query}
          placeholder="Search and you shall find"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          name="name"
          value={caption}
          placeholder="Say something fun"
          onChange={(e) => setCaption(e.target.value)}
        />
        <select
          className="button"
          name="caption-placement"
          onChange={(e) => setCaptionPlacement(e.target.value)}
        >
          <option value="below-center">Below — center</option>
          <option value="overlay-center-top">Overlay — center top</option>
          <option value="overlay-center-bottom">Overlay — center bottom</option>
        </select>
        <input
          className="button button-primary"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default QuerySection;
