const FlightTicket = require('./flightTicketModule');

const myTicket = new FlightTicket('23A', 'AC123', 'YYZ', 'LAX', '2023-04-15');
myTicket.display();

myTicket.updateSeatNum('24A');
myTicket.updateArrivalAirport('SFO');
console.log(`New Seat Number: ${myTicket.getSeatNum()}`);
console.log(`New Arrival Airport: ${myTicket.getArrivalAirport()}`);
