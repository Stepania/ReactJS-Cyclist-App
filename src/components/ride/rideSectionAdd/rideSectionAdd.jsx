import React, { useState } from "react";
import Record from "../../../models/Record";
import "./rideSectionAdd.css";

function RideSectionAdd(props) {
  const [desc, setDescription] = useState();
  const [dist, setDistance] = useState();
  const [durat, setDuration] = useState();
  const [date, setDate] = useState();

  return (
    <div className="ride-section-add">
      <div className="ride-section-add-flex">
        <div className="description">
          <input
            type="text"
            name="Description"
            placeholder="Description"
            className="form-control form-control-small"
            value={desc}
            onInput={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="distance">
          <input
            type="number"
            name="Distance"
            placeholder="Distance,m"
            className="form-control form-control-small"
            value={dist}
            onInput={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="duration">
          <input
            type="number"
            name="Duration"
            placeholder="Duration,min"
            className="form-control form-control-small"
            value={durat}
            onInput={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="date">
          <input
            type="date"
            name="Date"
            placeholder="Date"
            className="form-control form-control-small"
            value={date}
            onInput={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <input
        type="button"
        name="Add"
        value="Add"
        className="btn btn-primary mb-3"
        onClick={() => save(desc, dist, durat, date, props.setLocalStorage)}
      />
    </div>
  );
}

function save(desc, dist, durat, date, setLocalStorage) {
  let id = Math.floor(Math.random() * 1000000)
  let record = new Record(id, desc, dist, durat, date);
  let records = JSON.parse(localStorage.getItem("records"));
  records = records ? records : [];
  records.push(record);
  setLocalStorage(records);
}

export default RideSectionAdd;
