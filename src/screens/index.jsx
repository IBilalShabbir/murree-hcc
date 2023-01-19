import {
  AvailableInventory,
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
      <div className="cottages__section">
        <div className="cottages__section__container">
          <div className="cottages__section__container__heading">Cottages</div>
        </div>
      </div>
    </>
  );
}
