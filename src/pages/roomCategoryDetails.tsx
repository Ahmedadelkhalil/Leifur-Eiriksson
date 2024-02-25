import RoomDetailsMainSec from "../components/rooms/main Section/roomDetailsMainSec";
import Features from "../components/rooms/features Section/features";
import Slider from "../components/rooms/slider Section/slider";
import RoomDetailsCalenderSec from "../components/rooms/calender Section/calender";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Room_Details } from "../types/dataTypes";

const RoomCategoryDetails = () => {
  const [categoryToView, setCategoryToView] = useState<Room_Details>();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      const { statePass } = state.from;
      setCategoryToView({ ...statePass });
    }
  }, [state]);
  document.title = `Leifur-Eiriksson - ${
    categoryToView?.category === undefined ? "" : categoryToView?.category
  }`;
  return (
    <div className="roomDetails_container">
      <div className="roomDetails_container">
        <RoomDetailsMainSec
          secBg={`${categoryToView?.room_Section_bg}`}
          mainHeader={`${
            categoryToView?.main_Section_Header === undefined
              ? ""
              : categoryToView?.main_Section_Header
          }`}
          mainParagraph={`${
            categoryToView?.main_Section_desc === undefined
              ? ""
              : categoryToView?.main_Section_desc
          }`}
        />
        <Features features={categoryToView?.services_And_Amenities!} />
        <Slider sliderImgs={categoryToView?.slider!} />
        <RoomDetailsCalenderSec />
      </div>
    </div>
  );
};

export default RoomCategoryDetails;
