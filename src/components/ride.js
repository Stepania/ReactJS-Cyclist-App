class Ride {
  constructor(newId, newDistance, newDate, newDuration, newDescription) {
    this.id = newId;
    this.distance = newDistance;
    this.date = newDate;
    this.duration = newDuration;
    this.description = newDescription;
  }
  // 11. A calculation within a part
  calcSpeed(distance, duration) {
    let result = 0;
    let avgSpeed = distance / (duration / 60);

    return (result += Math.trunc(avgSpeed));
  }
}

export default Ride;
