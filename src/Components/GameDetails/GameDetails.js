import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./gameDetails.css";

export default function GameDetails() {
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=bb9e9578cf034172a9f1ed6e568d6325`
      )
      .then((res) => {
        setValue(res.data);
        // console.log("Axios response", res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Axios err", err);
        setLoading(false);
      });
  };
  return (
    <div className="gameDetails">
      <div className="gameDetails__container">
        <div className="gameDetails_name__rating">
          <h3>{value.name}</h3>
          <h4>
            Rating: <span>{value.rating}</span>
          </h4>
        </div>
        <hr />
        <div className="gameDetails_website__released">
          <h5>
            Released: <span>{value.released}</span>
          </h5>
          <h5>
            Website: <span>{value.website}</span>
          </h5>
        </div>
        <img
          className="gameDetails__img"
          src={value.background_image_additional}
        />
        <hr />
        <div className="gameDetails__desc">
          <p>
            <h1>
              <span>Description: </span>
            </h1>
            {value.description_raw}
          </p>
        </div>
      </div>
    </div>
  );
}
