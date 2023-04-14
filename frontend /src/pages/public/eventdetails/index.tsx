import { Button, Typography } from "@mui/material";
import Slider from "react-slick";
import { EnhancedSlider, SliderWrapper } from "../homepage/banner.style";
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
