import { useState } from "react";
import QuerySection from "./QuerySection";
import Gallery from "./Gallery";

function App() {
  const [gifs, setGifs] = useState([]);
  const [captionRecieved, setcaptionRecieved] = useState("");
  const [captionPlacementRecieved, setCaptionPlacementRecieved] = useState("");

  const search = (query) => {
    fetchGifs(query);
  };
  const caption = (caption) => {
    setcaptionRecieved(caption);
  };

  const captionPlacement = (captionPlacement) => {
    setCaptionPlacementRecieved(captionPlacement);
  };


  return (
    <div className="container">
      <h1>Gifoogle</h1>
      <p>The best-worst gif search engine ever.</p>
      <QuerySection search={search} caption={caption} captionPlacement={captionPlacement}/>
      <Gallery gifs={gifs} caption={captionRecieved} captionPlacement={captionPlacementRecieved} />
    </div>
  );

  async function fetchGifs(query) {
    try {
      const API_KEY = "1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq";
      const BASE_URL = "http://api.giphy.com/v1/gifs/search";
      const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=3`);
      const res = await resJson.json();
      // console.log(res.data);
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  }
}

export default App;
