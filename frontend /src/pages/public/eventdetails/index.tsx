import { ExpandCircleDownOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import { EnhancedSlider, SliderWrapper } from "../homepage/banner/banner.style";
import { CustomBox } from "./index.style";
export function EventDetail() {
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
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F396738279%2F166312578381%2F1%2Foriginal.20221120-053822?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=47c89ba1e76ec57b8f22f8e913aeb5dd",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F431850979%2F5609178309%2F1%2Foriginal.20230125-111307?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C882%2C441&s=0d3c8482d2fe97f4843dccd2c603d698",
  ];

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
          <Typography fontWeight={600} lineHeight={"2.5rem"} fontSize={"1rem"}>
            April 16
          </Typography>

          <Typography fontWeight={800} lineHeight={"2.5rem"} fontSize={"2rem"}>
            Begin your Tai Chi journey: Traditional Movements for Health /
            Rejuvenation
          </Typography>

          <Typography fontWeight={600} lineHeight={"2.5rem"} fontSize={"1rem"}>
            Learning even basic Tai Chi skills can promote balance, calmness,
            and mental focus. Every Sunday: 11am EST/4pm GMT [Class is 30 min
            long]
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
        <span>
          <Button
            variant="contained"
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
        </span>
      </CustomBox>
    </>
  );
}
