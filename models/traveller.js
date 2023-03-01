const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  } ,0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

// SEANS NOTES

// Higher Order Functions
// When deciding which to use I always start with what needs to be Returned.

// ARRAY:
// Array.filter((x) ⇒ {}) returns new array with a filtered length
// Array.map((x) ⇒ {}) returns new array with same length but modified

// SINGLE VALUE:
// Array.reduce((total, x) ⇒ {}, 0) returns a single value
// Array.find((x) ⇒ {}) returns One thing - value of element or undefined

// BOOLEAN:
// Array.some((x) ⇒ {}) returns true or false
// Array.every((x) ⇒ {}) returns true or false
