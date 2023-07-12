import React, { useEffect, useState } from "react";
import Displaycard from "../Displaycard/Displaycard";
import axios from "axios";
import { Grid } from "@mui/material";
import "./Songs.modules.css";

const albumNewApi = "https://qtify-backend-labs.crio.do/albums/new";

const Songslist = () => {
  const [Songs, setSongs] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(albumNewApi);
      const data = await response.data;
      setSongs(data);
    } catch (e) {
      console.log(e.response.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="main-section">
        <button className="main-btn">Show All</button>
      </div>
      <div className="songs-wrapper">
        {Songs.map((song) => {
          return (
            <Displaycard
              albumImage={song.image}
              followers={song.follows}
              title={song.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Songslist;
