import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MainFeaturedPost from "./components/MainFeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import post1 from "./components/blog-post.1.md";
import post2 from "./components/blog-post.2.md";
import post3 from "./components/blog-post.3.md";
import Markdown from "./components/Markdown";

import atv01Image from "./images/atv01.jpg";
import atv02Image from "./images/atv2.jpg";

const sections = [
  { title: "O NAMA", url: "#" },
  { title: "SLIKE", url: "#" },
  { title: "KONTAKT", url: "#" },
];

const mainFeaturedPost = {
  title: "KVAD AVANTURA U BLIZINI BEOGRADA",
  description: "Multiple lines of text that form the lede...",
  image: "text 0",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Clanak 1.",
    date: "Nov 12",
    description: "Profesionalna usluga ....",
    image: atv01Image,
    imageLabel: "Image 1 text",
  },
  {
    title: "Clanak 2.",
    date: "Nov 11",
    description: "Podelite vase iskustvo i fotografija sa avanture",
    image: atv02Image,
    imageLabel: "Image 2 Text",
  },
];
const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost
            Header
            post={mainFeaturedPost}
            sections={sections}
          />

          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="VIDETI POSLE" posts={posts} />

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="u PROCESU RADA!" />
    </ThemeProvider>
  );
}
