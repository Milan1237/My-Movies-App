import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import StarIcon from "@mui/icons-material/Star";

export default function MovieCard({ title, rating, description, image }) {
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
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description.slice(0 , 50)+ '...' }
          </Typography>
          <h2 className=" flex gap-2">
           <StarIcon sx={{color: 'orange'}}/>
            {rating}
          </h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
