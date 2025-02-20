import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

//function NetflixSeries() {
export const NetflixSeries = () => {
  return (
    <>
      <ul className="grid grid-three--cols">
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} curElem={curElem}></SeriesCard>

        ))}
      </ul>
    </>
  );
};

//export default NetflixSeries;
