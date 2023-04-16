// @ts-nocheck
import { ExpandCircleDownOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FetchUtils } from "../../../utils/fetchUtils";
import { EnhancedSlider, SliderWrapper } from "../homepage/banner/banner.style";
import { CustomBox } from "./index.style";
import ReactLoading from "react-loading";
import { IEventCard } from "../../../components/card";
import { IEvent } from "../../../constants/interface";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../redux/store";
import axios from "axios";
import { getInfoFromToken } from "../../../utils/infoFromToken";

export function EventDetail() {
  const [loading, setLoading] = useState(true);
  const [eventDetails, setEventDetails] = useState<IEvent>();
  const { id } = useParams();

  async function getEvents(id: string) {
    const response = await FetchUtils.getRequest(`/events/${id}`);

    setLoading(false);
    return response;
  }
  useEffect(() => {
    async function fetchData() {
      const eventDetails = await getEvents(id as string);
      setEventDetails(eventDetails as any);
    }
    fetchData();
  }, [id]);

  const setAppUser = getInfoFromToken()?.clientInfo;
  console.log("set App uSer", setAppUser);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bannerImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F485627899%2F1198813429483%2F1%2Foriginal.20230405-034510?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C51%2C2500%2C1250&s=6862e207ac508f914a9458903fab6a00",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F486741749%2F1471147113683%2F1%2Foriginal.20230406-091529?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C960%2C480&s=a15ca60072bea3aa6e0855f2b161beda",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F481188509%2F1199014074233%2F1%2Foriginal.20230330-062019?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=adbf2ece687dd4b93bb9076c3c36aa60",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F486741749%2F1471147113683%2F1%2Foriginal.20230406-091529?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C960%2C480&s=a15ca60072bea3aa6e0855f2b161beda",
  ];

  if (loading) {
    return (
      <ReactLoading
        type={"bubbles"}
        color={"#d3d3d"}
        height={"20%"}
        width={"20%"}
      />
    );
  }

  async function handleRegistrationButton() {
    if (!localStorage.getItem("token")) {
      toast("please login to register");
      return;
    }

    const res = await FetchUtils.postRequest(
      `/user/events?id=${setAppUser.id}&event_id=${id}`,
      {}
    );

    if (res) {
      axios({
        method: "POST",
        url: "https://formspree.io/f/myyaboad",
        data: {
          email: setAppUser.email,
          message: `Email: ${setAppUser.email} has registered for the event ${eventDetails?.event_name} @ ${eventDetails?.event_date}`,
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

  console.log("event details", eventDetails);
  return (
    <>
      <SliderWrapper>
        <EnhancedSlider {...settings}>
          {bannerImages.map((imageUrl) => (
            <div key={imageUrl}>
              <img
                src={imageUrl}
                style={{ zIndex: 33 }}
                alt="Banner"
                height={600}
              />
            </div>
          ))}
        </EnhancedSlider>
      </SliderWrapper>

      <CustomBox>
        <span>
          <br />
          <Typography fontWeight={600} lineHeight={"2.5rem"} fontSize={"1rem"}>
            {faker.date.past().toString()}
          </Typography>

          <Typography fontWeight={800} lineHeight={"2.5rem"} fontSize={"2rem"}>
            {eventDetails?.event_name}
          </Typography>

          <Typography fontWeight={600} lineHeight={"2.5rem"} fontSize={"1rem"}>
            {faker.lorem.paragraph()}
          </Typography>
          <br />
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandCircleDownOutlined />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>LOCATION : Show Map</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.726939300131!2d72.86457332030122!3d19.113644578096093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1681510297276!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </AccordionDetails>
          </Accordion>
          <br />
          <br />
          <Typography fontWeight={300} lineHeight={"2.5rem"} fontSize={"1rem"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
            hic ullam molestias. Magni laboriosam quas ex mollitia excepturi
            error, aliquid ipsum illo quo unde corrupti, voluptatum repudiandae
            autem consequuntur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto nam hic ullam molestias. Magni laboriosam
            quas ex mollitia excepturi error, aliquid ipsum illo quo unde
            corrupti, voluptatum repudiandae autem consequuntur? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iusto nam hic ullam
            molestias. Magni laboriosam quas ex mollitia excepturi error,
            aliquid ipsum illo quo unde corrupti, voluptatum repudiandae autem
            consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iusto nam hic ullam molestias. Magni laboriosam quas ex
            mollitia excepturi error, aliquid ipsum illo quo unde corrupti,
            voluptatum repudiandae autem consequuntur? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iusto nam hic ullam molestias.
            Magni laboriosam quas ex mollitia excepturi error, aliquid ipsum
            illo quo unde corrupti, voluptatum repudiandae autem consequuntur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
            hic ullam molestias. Magni laboriosam quas ex mollitia excepturi
            error, aliquid ipsum illo quo unde corrupti, voluptatum repudiandae
            autem consequuntur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto nam hic ullam molestias. Magni laboriosam
            quas ex mollitia excepturi error, aliquid ipsum illo quo unde
            corrupti, voluptatum repudiandae autem consequuntur? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iusto nam hic ullam
            molestias. Magni laboriosam quas ex mollitia excepturi error,
            aliquid ipsum illo quo unde corrupti, voluptatum repudiandae autem
            consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iusto nam hic ullam molestias. Magni laboriosam quas ex
            mollitia excepturi error, aliquid ipsum illo quo unde corrupti,
            voluptatum repudiandae autem consequuntur? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iusto nam hic ullam molestias.
            Magni laboriosam quas ex mollitia excepturi error, aliquid ipsum
            illo quo unde corrupti, voluptatum repudiandae autem consequuntur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
            hic ullam molestias. Magni laboriosam quas ex mollitia excepturi
            error, aliquid ipsum illo quo unde corrupti, voluptatum repudiandae
            autem consequuntur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto nam hic ullam molestias. Magni laboriosam
            quas ex mollitia excepturi error, aliquid ipsum illo quo unde
            corrupti, voluptatum repudiandae autem consequuntur?
          </Typography>
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleRegistrationButton}
            style={{
              fontSize: "2.5rem",
              padding: "1rem 2.5rem",
              fontWeight: 500,
              borderRadius: "2rem",
              backgroundColor: "#d1410c",
            }}
          >
            Register
          </Button>{" "}
        </div>
      </CustomBox>
    </>
  );
}
