/*
Object Oriented Programming Structure
1. Object  --- Anything in reality
    Storage container -> Multi value container (Homo/hetreo)
    attributes
    methods
    anything which has lot of data associated to it.

2. CLass  --- Drawing is class
    programatically layout 
    class Name {
      // Define how objects will look in memory.
    }

Principle of OOPS
  1. Think about an Object
       Name : attributes
  2. Create its class
        class keyword {} -> program
  3. From the class create real object in memory
        using new operator

  Requirements: 
  Mr. JOhn: Create a food delivery app
  User must be able to create an account using ph no.
  User can place an order
  User can add dishes from a res into cart
  PickUp Person which will pick and drop the order.

  User: name, phoneNum, email, gender, city, state, pincode
  Restaurant: name, phone, address, pricePerPerson, reviews, operatingHours
  Order: id, price, dishes, user

  Objects can be Related to each Other
    1. One to One
        1 user has 1 Address
    2. One to Many
        1 user has many addresses
    3. Many to Many
        many users has many addresses
        
  Problems :-
    Marketing - 
    Railway
    Doctor 
    hump
*/

// 1. Think of an object
//    MakeMyTrip: OneWayFlight

// 2. Create its class
// Model
class OneWayFlight {
    // 1. Attributes: Property of an Object
    fromLocation: string;
    toLocation: string;
    departureDate: string;
    numOfTravellers: number;
    travelClass: string;
  
    // 2. Constructor: Default Initialization
    constructor() {
      this.fromLocation = "New delhi";
      this.toLocation = "Goa";
      this.departureDate = "15th August, 2022";
      this.numOfTravellers = 2;
      this.travelClass = "Economy";
    }

    // 2. Constructor: Parameterized Initialization
    // constructor(fromLocation: string, toLocation: string, departureDate: string, numOfTravellers: number, travelClass: string) {
    //   this.fromLocation = fromLocation;
    //   this.toLocation = toLocation;
    //   this.departureDate = departureDate;
    //   this.numOfTravellers = numOfTravellers;
    //   this.travelClass = travelClass;
    // }
  
    // Function/Methods -> Property of Object
    setData(fromLocation: string, toLocation: string, departureDate: string, numOfTravellers: number, travelClass: string) {
      this.fromLocation = fromLocation;
      this.toLocation = toLocation;
      this.departureDate = departureDate;
      this.numOfTravellers = numOfTravellers
      this.travelClass = travelClass;
    }
}

class TwoWayFlight extends OneWayFlight {
  returnDate: string;
  constructor() {
    super();
    this.returnDate = "22nd August, 2022";
  }
}
  
// 3. Create an object
let flight1 = new OneWayFlight(); // flight1 having address of object is in stack which points to object in heap
flight1.setData("New Delhi", "Chennai", "20th Aug, 2022", 2, "Economy");
flight1.departureDate = "25th August, 2022";

let flight2 = new OneWayFlight();

let flight3 = flight1;

// flight1, flight2 and flight3 are reference variables and not objects

let flight4 = new TwoWayFlight();