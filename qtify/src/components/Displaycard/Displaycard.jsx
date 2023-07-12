import React from "react";
import "./Displaycard.modules.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
const Displaycard = ({ albumImage, followers, title }) => {
  return (
    <>
      <div>
        <Card
          sx={{ width: 159, height: 253, borderRadius: "20px", margin: 2 }}
          className="cardwrapper"
        >
          <CardMedia
            sx={{ height: "210px" }}
            component="img"
            image={albumImage}
            title="Card"
          />
          <CardContent sx={{ margin: "-5px" }}>
            <Typography
              sx={{
                fontSize: "10px",
                backgroundColor: "black",
                color: "white",
                width: "50%",
                padding: 0.3,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              {followers} Follows
            </Typography>
          </CardContent>
        </Card>
        <Typography margin={2}>{title}</Typography>
      </div>
    </>
  );
};

export default Displaycard;
