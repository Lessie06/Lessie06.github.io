import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import tindog from "../images/tindog.png";
import Link from "@mui/material/Link";
import giphy from "../images/giphy.jpg";
import { Container, Grid } from "@mui/material";
import "../styling/AboutMe.css";
import todo from '../images/todolist.jpg'

class Projectcards extends React.Component {
  render() {
    return (
      <div>
        <div className="mid-container">
          <h1 className="header-text">My Projects</h1>
          <Grid className='cards' container spacing={3} justify="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={tindog}
                  alt="tin-dog"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    TinDog
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A fictitious Tinder inspired website for dogs, created using
                    HTML, CSS, Bootstrap.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://tindog-website-master.herokuapp.com/">
                    {" "}
                    TinDog
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={giphy}
                  alt="giphy"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Giphy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A react app that shows all the currently trending gifs.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href="https://github.com/Lessie06/giphy-app">
                    {" "}
                    Giphy
                  </Link>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={todo}
                  alt="todo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ToDo List
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  The current project I am working on which implements Express.js and MongoDB.
                  </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          

          
        </div>
      </div>
    );
  }
}
export default Projectcards;
