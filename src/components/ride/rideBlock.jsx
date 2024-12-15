import React, { useState } from "react";
import RideSectionAdd from "./rideSectionAdd/rideSectionAdd";
import RideSectionHistory from "./rideSectionHistory/rideSectionHistory";
import Cyclist from "../cyclist";

function RideBlock() {
  const [records, setRecords] = useState();

  function getLocalStorageFunc() {
    return JSON.parse(localStorage.getItem("records")) ?? [];
  }

  // Function to call on 'setLocalStorage' event trigger
  function setLocalStorageFunc(records) {
    localStorage.setItem("records", JSON.stringify(records));
    setRecords(records);
  }

  function calcSpeed() {
    let rides = getLocalStorageFunc();
    let speed = rides.map((ride) => ride.dist / ride.durat);
    let aveSpeed = speed.reduce((acc, cur) => acc + cur, 0) / speed.length;
    return aveSpeed;
  }

  function totalDistance() {
    let rides = getLocalStorageFunc();
    let totalDist = rides.reduce((acc, cur) => acc + parseInt(cur.dist), 0);
    return totalDist;
  }

  return (
    <>
      <RideSectionAdd setLocalStorage={setLocalStorageFunc} />
      <RideSectionHistory
        records={getLocalStorageFunc()}
        totalDistance={totalDistance()}
        calcSpeed={calcSpeed()}
        setLocalStorage={setLocalStorageFunc}
      />
    </>
  );
}

export default RideBlock;
