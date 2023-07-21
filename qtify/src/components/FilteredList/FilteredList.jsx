import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import Displaycard from "../Displaycard/Displaycard";

const GenreAPI = "https://qtify-backend-labs.crio.do/genres";

const FilteredList = ({ SongsAPI }) => {
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [value, setValue] = useState("all");

  const containerRef = useRef(null);
  const fetchSongs = async () => {
    try {
      const res = await axios.get(SongsAPI);
      const data = await res.data;
      setSongs(data);
    } catch (e) {
      console.log(e.res.message);
    }
  };
  const fetchGenre = async () => {
    try {
      const res = await axios.get(GenreAPI);
      const data = await res.data;
      setGenre(data.data);
    } catch (e) {
      console.log(e.res.message);
    }
  };
  const btnpressprev = () => {
    let width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft -= width;
  };

  const btnpressnext = () => {
    let width = containerRef.current.clientWidth;
    containerRef.current.scrollLeft += width;
  };

  useEffect(() => {
    fetchSongs();
    fetchGenre();
  }, []);

  useEffect(() => {
    generateFilteredSongs(value);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateFilteredSongs = (value) => {
    const filtered = songs.filter((item) => item.genre.key === value);
    setFilteredSongs(filtered);
  };

  return (
    <div
      style={{
        borderTop: "2px solid #34c94b", // Top border
        borderBottom: "2px solid #34c94b", // Bottom border
      }}
    >
      <div className="main-section">
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "25px",
            marginBottom: "10px",
            marginTop: "15px",
          }}
        >
          Songs
        </Typography>
      </div>
      <Box sx={{ width: "100%", typography: "body1", color: "white" }}>
        <TabContext value={value}>
          <Box style={{ color: "white", display: "flex" }}>
            <TabList
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              style={{ maxWidth: "fit-content" }}
              sx={{ marginLeft: "60px" }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#34c94b",
                },
              }}
            >
              <Tab
                label="All"
                value="all"
                sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
              />
              {genre.map((item) => {
                return (
                  <Tab
                    label={item.label}
                    value={item.key}
                    key={item.key}
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  />
                );
              })}
            </TabList>
          </Box>
          <TabPanel value={value}>
            {value === "all" ? (
              <div>
                <div className="product-carousel">
                  <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                  </button>
                  <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                  </button>
                  <div className="product-container" ref={containerRef}>
                    {songs.map((songs) => {
                      return (
                        <Displaycard
                          key={songs.key}
                          albumImage={songs.image}
                          followers={songs.likes}
                          title={songs.title}
                          length={songs.genre.key}
                          filter={true}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="product-carousel">
                  <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                  </button>
                  <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                  </button>
                  <div className="product-container" ref={containerRef}>
                    {filteredSongs.map((songs) => {
                      return (
                        <Displaycard
                          key={songs.key}
                          albumImage={songs.image}
                          followers={songs.likes}
                          title={songs.title}
                          length={songs.genre.key}
                          filter={true}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default FilteredList;
