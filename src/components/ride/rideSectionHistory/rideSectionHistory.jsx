import React from "react";
import "./rideSectionHistory.css";
import RideSectionRecord from "./rideSectionRecord/rideSectionRecord";

function RideSectionHistory(props) {
  return (
    <>
      <div className="container">
        <div className="ride-section-history">
          {RenderRideRecords(props.records, props.setLocalStorage)}
        </div>
        <div className="output-total-distance">
          <h3>Total distance, metres</h3>
          <output className="btn btn-light">
            <div>{props.totalDistance}</div>{" "}
          </output>
        </div>
      </div>
    </>
  );
}

function RenderRideRecords(records, setLocalStorage) {
  let recordEls = [];
  if (records === null) {
    return recordEls;
  }
  for (let i = 0; i < records.length; i++) {
    recordEls.push(
      <RideSectionRecord
        id={records[i].id}
        description={records[i].desc}
        distance={records[i].dist}
        duration={records[i].durat}
        date={records[i].date}
        key={i}
        setLocalStorage={setLocalStorage}
      />
    );
  }
  return recordEls;
}

export default RideSectionHistory;
