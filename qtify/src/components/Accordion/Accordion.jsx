import React from "react";
import "./Accordion.modules.css";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { ReactComponent as Expand } from "../../Assets/Expand.svg";

const AccordionSection = () => {
  return (
    <div className="main-accordion">
      <Typography
        variant="h1"
        sx={{ fontFamily: "poppins", fontSize: "60px", fontWeight: "600" }}
      >
        FAQs
      </Typography>
      <Accordion
        sx={{
          width: "60%",
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          borderRadius: "8px",
          marginBottom: "16px", // Add gap between accordions
        }}
      >
        <AccordionSummary
          expandIcon={<Expand />}
          sx={{
            backgroundColor: "black",
            borderRadius: "8px",
            fontSize: "20px", // Increase the font size
          }}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
            color: "black",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            fontSize: "16px", // Increase the font size
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "60%",
          backgroundColor: "black",
          color: "white",
          border: "1px solid white",
          borderRadius: "8px",
          marginBottom: "16px", // Add gap between accordions
        }}
      >
        <AccordionSummary
          expandIcon={<Expand />}
          sx={{
            backgroundColor: "black",
            borderRadius: "8px",
            fontSize: "20px", // Increase the font size
          }}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
            color: "black",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            fontSize: "16px", // Increase the font size
          }}
        >
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
