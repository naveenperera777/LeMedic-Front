import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { func } from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Usermgt from "../Components/usermgt";
import Navigate from "../Components/navigate";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
    // align: "center"
  },
  media: {
    height: 140,
    align: "center"
  },
  appointment: {
    display: "flex",
    align: "center"
  }
});

export default function MediaCard() {
  // const [count, setCount] = useState(0);

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.appointment}>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile!"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Start Consultation!
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                //   image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  View History
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                //   image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Admin Panel
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card className={classes.card}>
            <NavLink to={"/usermgt"}>
              <CardActionArea
              // onClick={function() {
              //   setCount(count + 1);
              // }}
              >
                <CardMedia
                  className={classes.media}
                  //   image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    User Management
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  />
                </CardContent>
              </CardActionArea>
            </NavLink>
          </Card>
        </div>
        <switch>
          <Route path="/usermgt" component={Usermgt} />
          <Route path="/navigate" component={Navigate} />
        </switch>
      </div>
    </Router>
  );
}
