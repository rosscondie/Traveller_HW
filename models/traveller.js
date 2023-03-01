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
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

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
