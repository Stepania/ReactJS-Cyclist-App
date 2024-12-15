import Ride from "./ride";
//13. Provide default values
const localStorageKey = "rides";

//1.Create a whole that acts as a container and gateway of accessing to parts
class Cyclist {
  constructor() {
    this.lastChange = {};
    this.allMyRides = [];
  }
  //2.Add a part
  addRide(newDistance, newDate, newDuration, newDescription) {
    // 10.checkign for validation of an input
    if (isNaN(newDistance)) throw "Distance must be a number";
    if (isNaN(newDuration)) throw "Duration must be a number";
    if (newDistance < 0) throw "Distance must be positive number";
    if (newDuration < 0) throw "Duration must be positive number";
    if (newDescription === "") throw "Empty field is not allowed";

    // FEATURE 13. Provide default values
    const newId = this.allMyRides.length + 1;
    const newRide = new Ride(
      newId,
      newDistance,
      newDate,
      newDuration,
      newDescription
    );
    this.allMyRides.push(newRide);
    // this._setLocalStorage();
  }

  //FEATURE 12. A calculation across many parts
  totalDistance(rides) {
    let totalDist = rides.reduce((acc, cur) => acc + parseInt(cur.dist), 0);
    return totalDist;
  }

  // FEATURE 5. Delete a selected part
  removeRide(targetRideId) {
    let rideIndex = this.allMyRides.findIndex(
      (ride) => ride.id === targetRideId
    );
    this.allMyRides.splice(rideIndex, 1);
    for (let aRide of this.allMyRides) {
      if (aRide.id > targetRideId) {
        aRide.id--;
      }
    }
  }
  //15. Get all parts
  getAllRides() {
    let result = "";
    for (let aRide of this.allMyRides) {
      result += aRide + "\n";
    }
    return result;
  }
  //3. Sort parts
  sortRidesDescrip() {
    this.allMyRides.sort(function (a, b) {
      a.description.toUpperCase();
      b.description.toUpperCase();
      if (a.description < b.description) {
        return -1;
      }
      if (a.description > b.description) {
        return 1;
      }
      return 0;
    });
  }
  // 14. Find a part given a search criteria
  findRideById(tripId) {
    return this.allMyRides.find((ride) => ride.id === tripId);
  }

  //6.save to local storage
  _setLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.allMyRides));
  }
  //7.load from local storage
  _getLocalStorage() {
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  //4. Filter parts. trip - is number of km, which needs to be checked. For example trip = 5km = short trip
  getLongTrips(trip) {
    return this.allMyRides.filter((ride) => ride.distance > trip);
  }
  getShorTrips(trip) {
    return this.allMyRides.filter((ride) => ride.distance < trip);
  }
  //8.Update part-description
  updateDescription(tripId, descr) {
    if (tripId === undefined) throw "trip Id is not set";
    let tripToChange = this.findRideById(tripId);
    let oldDescription = tripToChange.description;
    if (descr !== undefined) tripToChange.description = descr; //can add more fields
    this.lastChange = {
      id: tripId,
      oldDescription: oldDescription,
    };
  }
  //9.Discard part-description
  undoDescription() {
    if (this.lastChange.id === undefined) throw "No last change";
    let tripToChange = this.findRideById(this.lastChange.id);
    let newDescription = tripToChange.description;
    tripToChange.description = this.lastChange.oldDescription;
    this.lastChange = {
      id: tripToChange.id,
      oldDescription: newDescription,
    };
  }
}
export default Cyclist;
