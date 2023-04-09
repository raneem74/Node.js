class FlightTicket {
  constructor(seatNum, flightNum, departureAirport, arrivalAirport, travelDate) {
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.travelDate = travelDate;
  }

  
  display() {
    console.log(`Seat Number: ${this.seatNum}`);
    console.log(`Flight Number: ${this.flightNum}`);
    console.log(`Departure Airport: ${this.departureAirport}`);
    console.log(`Arrival Airport: ${this.arrivalAirport}`);
    console.log(`Travel Date: ${this.travelDate}`);
  }

  getSeatNum() {
    return this.seatNum;
  }

  getFlightNum() {
    return this.flightNum;
  }

  getDepartureAirport() {
    return this.departureAirport;
  }

  getArrivalAirport() {
    return this.arrivalAirport;
  }

  getTravelDate() {
    return this.travelDate;
  }

  updateSeatNum(newSeatNum) {
    this.seatNum = newSeatNum;
  }

  updateFlightNum(newFlightNum) {
    this.flightNum = newFlightNum;
  }

  updateDepartureAirport(newDepartureAirport) {
    this.departureAirport = newDepartureAirport;
  }

  updateArrivalAirport(newArrivalAirport) {
    this.arrivalAirport = newArrivalAirport;
  }

  updateTravelDate(newTravelDate) {
    this.travelDate = newTravelDate;
  }
}

module.exports = FlightTicket;