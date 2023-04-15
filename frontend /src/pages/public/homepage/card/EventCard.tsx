// @ts-nocheck
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { AppRegistrationOutlined, JoinFullTwoTone } from "@mui/icons-material";
import axios from "axios";
import { useAppSelector } from "../../../../redux/store";
import { toast } from "react-toastify";
import { getInfoFromToken } from "../../../../utils/infoFromToken";
import { IClient } from "../../../../redux/clients/thunk";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface IHomepageEventCard {
  image: string;
  title: string;
  time: string;
  followers: string;
  category: string;
  largeDescription: string;
}

export function HomepageEventCard(props: IHomepageEventCard) {
  const { category, followers, image, time, title, largeDescription } = props;
  const { setAppUser, isLoggedIn } = useAppSelector((state) => state.app);

  const navigate = useNavigate();
  function redirectToEventDetailsPage() {
    navigate("/events/details/1");
  }

  async function handleEventRegistration() {
    if (!!setAppUser) {
      axios({
        method: "POST",
        url: "https://formspree.io/f/myyaboad",
        data: {
          email: setAppUser.email,
          message: `Email: ${setAppUser.email} has registered for the event ${title} @ ${time}`,
        },
      })
        .then((response) => {
          toast(`Thank you, you are subscribed to the event ${name}`);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }
  return (
    <Card
      onClick={redirectToEventDetailsPage}
      sx={{ maxWidth: 345 }}
      style={{ height: 450 }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title[0].toUpperCase()}
          </Avatar>
        }
        title={title}
        subheader={time}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {largeDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {isLoggedIn && (
          <IconButton
            aria-label="share"
            onClick={async (e) => {
              e.stopPropagation();
              handleEventRegistration();
            }}
          >
            <AppRegistrationOutlined />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
