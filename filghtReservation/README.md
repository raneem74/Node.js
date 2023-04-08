# Custom module

1. Create a new directory for your project and navigate into it using the command line. You can do this using the following commands:

```

mkdir flight-ticket-reservation
cd flight-ticket-reservation

```

1. Initialize a new Node.js project by running the following command:

```

npm init

```

1. Follow the prompts to set up your project. When you're done, you should have a **`package.json`** file in your project directory.
2. Create a new file called **`flightTicket.js`** in your project directory. This will be the file where you define your flight ticket reservation module.
3. Inside **`flightTicket.js`**, start by defining your **`FlightTicket`** class:

```jsx

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

```

In this class, we've defined a constructor that takes in the seat number, flight number, departure airport, arrival airport, and travel date as arguments. We've also defined a number of methods for displaying, getting, and updating the ticket information.

1. Now that we've defined our **`FlightTicket`** class, we can use it in another file by importing it using the **`require()`** function. Create a new file called **`index.js`** in your project directory, and add the following code:

```jsx

const FlightTicket = require('./flightTicket');

const myTicket = new FlightTicket('23A', 'AC123', 'YYZ', 'LAX', '2023-04-15');
myTicket.display();

myTicket.updateSeatNum('24A');
myTicket.updateArrivalAirport('SFO');
console.log(`New Seat Number: ${myTicket.getSeatNum()}`);
console.log(`New Arrival Airport: ${myTicket.getArrivalAirport()}`);

```

In this file, we're importing our **`FlightTicket`** class from **`flightTicket.js`** using **`require()`**, and creating a new instance of the class with some sample data. We're then displaying the ticket information using the **`display()`** method, updating the seat number and arrival airport using

the appropriate methods, and displaying the updated information using the **`getSeatNum()`** and **`getArrivalAirport()`** methods.

1. Now that we've written our **`index.js`** file, we can run it using the following command:

```
Copy code
node index.js

```

This will execute the code in the file and display the output in the terminal.