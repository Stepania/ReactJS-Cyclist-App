function RideSectionRecord(props) {
  return (
    <div className="ride-section-history-record">
      <span>"{props.description}"</span>
      <span>{props.distance} m</span>
      <span>{props.duration} min</span>
      <span>{props.distance / props.duration} m/min</span>
      <span>{props.date}</span>
      <button onClick={() => remove(props.id, props.setLocalStorage)}>
        Delete
      </button>
    </div>
  );
}

function remove(id, setLocalStorage) {
  let records = JSON.parse(localStorage.getItem("records"));
  records = records ? records : [];
  let index = records.findIndex((r) => r.id === id);
  records.splice(index, 1);
  setLocalStorage(records);
}

export default RideSectionRecord;
