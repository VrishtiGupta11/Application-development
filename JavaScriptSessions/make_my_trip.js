let oneWay = {
    from: "Delhi",
    to: "Bengaluru",
    departureDate: "July 20, 2022",
    class: 1 // 1 -> Economy, 2 -> Premium economy, 3 -> business
};

let roundTrip = {
    from: "Punjab",
    to: "Delhi",
    return: "Bangalore",
    departureDate: "July 21, 2022",
    class: 2
};

let multiCity = {
    noOfTrips: 2,
    trips: [
        {
            from: "Delhi",
            to: "Bengaluru",
            departureDate: "July 22, 2022",
            class: 3
        },
        {
            from: "Bengaluru",
            to: "Delhi",
            departureDate: "July 24, 2022",
            class: 3
        }
    ]
};

let flights = [oneWay, roundTrip, multiCity];
// let flights = {
//     oneWay: oneWay,
//     roundTrip: roundTrip,
//     multiCity: multiCity,
// };

console.table(flights);

