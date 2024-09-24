/** @format */

import { useState } from "react";
// import DualCardComponent from "./DualCardComponent";
import { addDays, subDays } from "date-fns";
import CardsComponents from "../CardsComponents";

function Dash() {
  const [startDate, setStartDate] = useState(new Date());
  const [isMainPageOpen, setIsMainPageOpen] = useState(false);

  const handlePreviousDay = () =>
    setStartDate((prevDate) => subDays(prevDate, 1));
  const handleNextDay = () => setStartDate((prevDate) => addDays(prevDate, 1));
  const handleButtonClick = () => setIsMainPageOpen(true);
  const handleCloseMainPage = () => setIsMainPageOpen(false);

  // Data for each card type
  const card1Data = {
    startDate,
    setStartDate,
    handleNextDay,
    handlePreviousDay,
  };
  const card2Data = {};

  return (
    <div className="w-full p-4">
      {/* Use DualCardComponent with dynamic card types */}
      <CardsComponents
        card1Type="calendar"
        card2Type="assign"
        card1Data={card1Data}
        card2Data={card2Data}
        handleButtonClick={handleButtonClick}
        handleCloseMainPage={handleCloseMainPage}
        isMainPageOpen={isMainPageOpen}
      />
    </div>
  );
}

export default Dash;
