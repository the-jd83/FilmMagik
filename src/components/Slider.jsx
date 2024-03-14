import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Blockbuster Movies"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Popular on FilmMagik"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Action Movies" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Epics" />
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: 6;
`;

const Thumbnail = styled.div`
  border: 2px solid red; /* Add red border to each thumbnail */
  margin-right: 1rem;
  scroll-snap-align: start;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
