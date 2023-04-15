import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { getEvents } from "../../../redux/events/thunk";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { FetchUtils } from "../../../utils/fetchUtils";
import { HeroBanner } from "./banner/Banner";
import { HomepageEventCard } from "./card/EventCard";
import { eventCardsData } from "./card/eventCardData";
import { HomepageFooter } from "./footer";
import { HomepageHeader } from "./Header";
import { CardsWrapper } from "./index.style";
import { TrendingCategories } from "./trending";

export function Homepage() {
  const [locationData, setLocationData] = useState(null);
  const dispatch = useAppDispatch();
  const { eventList } = useAppSelector((state) => state.event);
  const eventCardDataLength = eventCardsData.length;
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

  useEffect(() => {
    dispatch(getEvents());
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
        {eventList.map((data, i) => {
          return (
            <span style={{ margin: "30px 10px" }}>
              <HomepageEventCard
                image={eventCardsData[i % eventCardDataLength].image}
                title={data.event_name}
                time={data.event_date}
                followers={eventCardsData[i % eventCardDataLength].followers}
                category={eventCardsData[i % eventCardDataLength].category}
                largeDescription={
                  eventCardsData[i % eventCardDataLength].largeDescription
                }
              />
            </span>
          );
        })}
      </CardsWrapper>

      <HomepageFooter />
    </div>
  );
}
