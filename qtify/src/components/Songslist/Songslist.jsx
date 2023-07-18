import React, { useEffect, useState, useRef } from "react";
import Displaycard from "../Displaycard/Displaycard";
import axios from "axios";
import { Button, Grid, Typography } from "@mui/material";
import "./Songs.modules.css";

const albumNewApi = "https://qtify-backend-labs.crio.do/albums/top";

const Songslist = ({ name, API }) => {
  const [albums, setAlbums] = useState([]);
  const [ShowCarausol, setShowCarausol] = useState(true);
  const containerRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      const data = await response.data;
      setAlbums(data);
      console.log(data);
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
    let width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft -= width;
  };

  const btnpressnext = () => {
    let width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft += width;
  };

  return (
    <div>
      <div className="main-section">
        <Typography sx={{ fontFamily: "poppins", fontSize: "25px" }}>
          {name}
        </Typography>
        <Button
          sx={{ color: "#34c94b", fontFamily: "poppins", fontSize: "20px" }}
          onClick={handleShowAll}
        >
          {ShowCarausol ? "Show All" : "Collapse"}
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
            <div className="product-container" ref={containerRef}>
              {albums.map((songs) => {
                return (
                  <Displaycard
                    albumImage={songs.image}
                    followers={songs.follows}
                    title={songs.title}
                    length={songs.songs.length}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid-wrapper">
          <Grid
            container
            marginY="1rem"
            paddingX="1rem"
            spacing={2}
            gap="40px"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {albums.map((songs) => {
              return (
                <Grid item xs={1.5} md={1.5} key={songs.id}>
                  <Displaycard
                    albumImage={songs.image}
                    followers={songs.follows}
                    title={songs.title}
                    length={songs.songs.length}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Songslist;
