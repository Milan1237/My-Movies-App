import React from "react";
import { useEffect } from "react";
import { getMovies } from "../api/movies";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies.payload);
  console.log(movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return <></>;
};

export default Home;
