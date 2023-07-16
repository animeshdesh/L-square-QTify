import React, { useEffect, useState } from "react";
import Displaycard from "../Displaycard/Displaycard";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import "./Songs.modules.css";

const albumNewApi = "https://qtify-backend-labs.crio.do/albums/top";

const Songslist = () => {
  const [Songs, setSongs] = useState([]);
  const [ShowCarausol, setShowCarausol] = useState(true);
  let box = document.querySelector(".product-container");

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

  const handleShowAll = () => {
    setShowCarausol(!ShowCarausol);
  };

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div>
      <div className="main-section">
        <Typography sx={{ fontFamily: "poppins", fontSize: "25px" }}>
          Top Album
        </Typography>
        <Button
          sx={{ color: "#34c94b", fontFamily: "poppins", fontSize: "20px" }}
          onClick={handleShowAll}
        >
          Show All
        </Button>
      </div>
      {ShowCarausol ? (
        <div>
          <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}>
              <p>&lt;</p>
            </button>
            <button className="next-btn" onClick={btnpressnext}>
              <p>&gt;</p>
            </button>
            <div className="product-container">
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
        </div>
      ) : (
        <Grid
          container
          marginY="1rem"
          paddingX="1rem"
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {Songs.map((song) => {
            return (
              <Grid item xs={1.6} md={1.6} key={song.id}>
                <Displaycard
                  albumImage={song.image}
                  followers={song.follows}
                  title={song.title}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Songslist;
