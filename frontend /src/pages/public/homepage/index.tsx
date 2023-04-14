import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeroBanner } from "./Banner";
import { HomepageEventCard } from "./card/EventCard";
import { eventCardsData } from "./card/eventCardData";
import { HomepageFooter } from "./footer";
import { HomepageHeader } from "./Header";
import { CardsWrapper } from "./index.style";
import { TrendingCategories } from "./trending";

export function Homepage() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await axios.get(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0ATzn66pQIM5YlYuOHDKbet43doJ"
        );
        console.log("response ", response);
        setLocationData(response.data.location.city);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLocationData();
  }, []);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <HomepageHeader />
      <HeroBanner />

      <Typography
        mt={20}
        mb={10}
        ml={41}
        fontSize={30}
        fontWeight="bold"
        justifyContent={"center"}
      >
        Popular in the city :
        <Typography display={"inline-block"} fontSize="2rem" ml={3}>
          {locationData}
        </Typography>
      </Typography>

      <TrendingCategories />
      <CardsWrapper>
        {eventCardsData.map((data) => {
          return (
            <span style={{ margin: "30px 10px" }}>
              <HomepageEventCard
                image={data.image}
                title={data.title}
                time={data.time}
                followers={data.followers}
                category={data.category}
                largeDescription={data.largeDescription}
              />
            </span>
          );
        })}
      </CardsWrapper>

      <HomepageFooter />
    </div>
  );
}
