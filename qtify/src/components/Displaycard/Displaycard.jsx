import React from "react";
import "./Displaycard.modules.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Tooltip,
} from "@mui/material";
const Displaycard = ({ albumImage, followers, title, length }) => {
  return (
    <>
      <Tooltip title={`${length} Songs`} placement="top" arrow>
        <div>
          <Card
            sx={{ width: 180, height: 253, borderRadius: "20px", margin: 2 }}
            className="cardwrapper"
          >
            <CardMedia
              sx={{ height: "210px" }}
              component="img"
              image={albumImage}
              title="Card"
            />
            <CardContent sx={{ margin: "-7px" }}>
              <Chip
                label={`${followers} Follows`}
                sx={{ backgroundColor: "black", color: "white" }}
                size="small"
              />{" "}
            </CardContent>
          </Card>
          <Typography margin={2}>{title}</Typography>
        </div>
      </Tooltip>
    </>
  );
};

export default Displaycard;
