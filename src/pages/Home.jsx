import React from "react";
import { useEffect, Suspense } from "react";
import { getCategories, getMovies } from "../api/movies";
import { useDispatch, useSelector } from "react-redux";
const MovieCard = React.lazy(() => import("../components/Card"));

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  console.log('home re-rendered');
  useEffect(() => {
    dispatch(getMovies('home'));
  }, []);
  return (
    <>
      <div className=" flex gap-4 flex-wrap">
        <Suspense fallback={<div>Loading movies...</div>}
         >
        {movies.map(
          ({ original_title, overview, vote_average, poster_path , _id , genre_ids } , index) => (
            <MovieCard
              title={original_title}
              description={overview}
              rating={vote_average}
              image={poster_path}
              genres={genre_ids}
              key={index}
            />
          )
        )}
        </Suspense>
      </div>
    </>
  );
};

export default Home;
