import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import atvImage from "../images/atv0.jpg";
import Header from "./Header";

function MainFeaturedPost(props) {
  const { post, sections } = props;

  return (
    <Paper
      sx={{
        backgroundColor: "grey.900",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${atvImage})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={atvImage} alt={post.imageText} />}
      <Header title="QUAD AVANTURA" sections={sections} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          minHeight: 400,
          padding: "16px",
          color: "black",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              margin: 0,
              color: "black",
            }}
          >
            {post.title}
          </h1>
          <p style={{ fontSize: "1.5rem", margin: 0, color: "black" }}>
            {post.description}
          </p>
        </Box>
      </Box>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MainFeaturedPost;
