import {
  AnidealLoaction,
  AvailableInventory,
  Cottages,
  HolidayCountryClub,
  HomepageBanner,
  YourLocationMurree,
} from "../components";

export default function Index() {
  return (
    <>
      <HomepageBanner />
      <AvailableInventory />
      <HolidayCountryClub />
      <YourLocationMurree />
      <Cottages />
      <AnidealLoaction />
    </>
  );
}
