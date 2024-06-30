// Function that returns the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function that returns the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing the two functions defined above
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that creates a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare doubler function using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the function passed as an argument
  function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
  }
  
  // Export functions for testing
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  