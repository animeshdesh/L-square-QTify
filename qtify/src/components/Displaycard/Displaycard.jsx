import React from "react";
import "./Displaycard.modules.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
const Displaycard = () => {
  return (
    <>
      <Card
        sx={{ width: 159, height: 253, borderRadius: "20px", margin: 2 }}
        className="cardwrapper"
      >
        <CardMedia
          sx={{ height: "210px" }}
          component="img"
          image="https://images.unsplash.com/photo-1688619104606-4608282777bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
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
            100M Follows
          </Typography>
        </CardContent>
      </Card>
      <Typography margin={2}>New Bollywood</Typography>
    </>
  );
};

export default Displaycard;
