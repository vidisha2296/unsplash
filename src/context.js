import React, { useState } from "react";
import axios from "axios";

const UnsplashContext = React.createContext();
const rootUrl = "https://api.unsplash.com";
const searchUrl = `${rootUrl}/search/photos?per_page=50&query=`;
const getPhotos = `https://api.unsplash.com/photos/random/?count=50&client_id=eRyRD-k3T5tO9-gM0eYMF8kqsYZqHoJ4mxir0CcjlLY`;

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  //   Get the latest movies
  const GetImages = async () => {
    console.log(process.env);
    await axios
      .get(getPhotos)
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  };

  // Search for Movies
  const SearchImages = async (term) => {
    await axios
      .get(searchUrl + term + `&client_id=eRyRD-k3T5tO9-gM0eYMF8kqsYZqHoJ4mxir0CcjlLY`)
      .then((response) => setImages(response.data.results))
      .catch((error) => console.log(error));
  };

  return (
    <UnsplashContext.Provider
      value={{
        images,
        setImages,
        SearchImages,
        GetImages,
      }}
    >
      {children}
    </UnsplashContext.Provider>
  );
};

export { UnsplashContext, ImageProvider };
