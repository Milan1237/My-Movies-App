import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function MovieCard({
  title,
  rating,
  description,
  image,
  genres,
}) {
  const { categories } = useSelector((state) => state.movie);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120px"
          image={`https://image.tmdb.org/t/p/w500///${image}`}
          alt="green iguana"
          className=" h-[400px] onject-contain"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title.length > 15 ? title.slice(0, 15) + "..." : title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description.slice(0, 50) + "..."}
          </Typography>
          <div id="genres" className="flex gap-2 align-middle flex-wrap ">
            {genres.map((genre) => (
              <Chip label={categories[genre]} key={genre} />
            ))}
          </div>
          <div className=" flex justify-between">
            <div className="flex align-middle">
              <StarIcon sx={{ color: "orange" }} />
              {rating}
            </div>
            <FavoriteIcon sx={{ color: "red" }} />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
