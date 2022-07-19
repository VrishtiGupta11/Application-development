let prompt = require("prompt-sync")();

// Whatsapp
// Make my trip
// Zomato
// Amazon - name, rating, price, size
// Covid cases - list of objects
// News API.org
// IMDB -> top 250 movies

let conversation1 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 22222',
    messages: [
        {
            text: 'hello',
            sender: '+91 99999 11111',
            timeStamp: '19 July 2022, 16:00',
            status: 1 // 1 -> sent, 2 -> delivered, 3 -> seen
        },
        {
            text: 'Hi, How are you ?',
            sender: '+91 99999 22222',
            timeStamp: '19 July 2022, 16:10',
            status: 3 // 1 -> sent, 2 -> delivered, 3 -> seen
        },
    ]
}

let conversation2 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 33333',
    messages: [
        {
            text: 'Aur Bhai. Kya haal ?',
            sender: '+91 99999 11111',
            timeStamp: '19 July 2022, 12:00',
            status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
        },
        {
            text: 'Badhiya. Tum sunao ?',
            sender: '+91 99999 33333',
            timeStamp: '20 July 2022, 10:00',
            status: 1 // 1 -> sent, 2 -> recieved, 3 -> seen
        }
    ]
}

let conversation3 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 44444',
    messages: [
        {
            text: 'Javascript shuru ho gyi ?',
            sender: '+91 99999 11111',
            timeStamp: '20 July 2022, 13:00',
            status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
        },
        {
            text: 'Haan Bhai, Recursion thoda takleef de raha hai',
            sender: '+91 99999 44444',
            timeStamp: '20 July 2022, 13:00',
            status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
        }
    ]
}

let conversation4 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 55555',
    messages: [
        {
            text: 'Infosys test de rhi hai ?',
            sender: '+91 99999 11111',
            timeStamp: '16 July 2022, 16:00',
            status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
        },
        {
            text: 'Haan, par itni tyari nhi hai.',
            sender: '+91 99999 55555',
            timeStamp: '16 July 2022, 16:00',
            status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
        }
    ]
}

let conversation5 = {
    contact1: '+91 99999 11111',
    contact2: '+91 99999 66666',
    messages: [
        {
            text: 'Competitive Programming and soft skills course join kiya ?',
            sender: '+91 99999 11111',
            timeStamp: '16 July 2022, 16:00',
            status: 2 // 1 -> sent, 2 -> recieved, 3 -> seen
        },
        {
            text: 'Haan, Tune kra ?',
            sender: '+91 99999 66666',
            timeStamp: '16 July 2022, 16:00',
            status: 3 // 1 -> sent, 2 -> recieved, 3 -> seen
        },
        {
            text: 'Haan, Hopefully it will be fruitful',
            sender: '+91 99999 11111',
            timeStamp: '16 July 2022, 16:00',
            status: 1 // 1 -> sent, 2 -> recieved, 3 -> seen
        }
    ]
}

// Array of objects

let myWhatsApp = [conversation1, conversation2, conversation3, conversation4, conversation5];

console.log(myWhatsApp)
console.table(myWhatsApp)

// let conversation in myWhatsApp -> It will iterate over keys
// let conversation of myWhatsApp -> It will iterate over values

function filterMessages(filter) {
    console.log("Filtering messages based on " + filter);
    for(let conversation of myWhatsApp) {
        // console.log(conversation);
        for(let data of conversation['messages']) {
            // console.log(data);
            console.log(data[filter]);
        }
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
    }
}
function searchByNumber(senderNumber) {
    console.log("Searching messages by " + senderNumber);
    for(let conversation of myWhatsApp) {
        for(let data of conversation['messages']) {
            if(data['sender'].includes(senderNumber)) {
                console.log(data['text']);
                // console.log(data['sender']);
                console.log('~~~~~~~~~~~~~~~~');
            }
        }
    }
}
function sortMessagesBasedOnlength() {
    console.log("Sorting messages based on Length");
    // Implement Bubble sort.
    let messages = [];
    for(let conversation of myWhatsApp) {
        for(let data of conversation['messages']) {
            messages.push(data['text']);
        }
    }
    console.table(messages);
    for(let i=0; i<messages.length; i++) {
        for(let j=0; j<messages.length - i -1; j++) {
            if(messages[j].length > messages[j+1].length) {
                let temp = messages[j];
                messages[j] = messages[j+1];
                messages[j+1] = temp;
            }
        }
    }
    console.table(messages);
}


let input = "yes";
while(input == "yes") {
    options = ["Filter messages", "Search by Sender Number", "Sort based on message length"]
    console.table(options);
    let option = Number(prompt("Select an option (0, 1, 2): "));

    // features

    if(option == 0) {
        let filter = prompt("Give a filter (text | sender | timestamp | status) ")
        filterMessages(filter);
    }
    else if(option == 1) {
        let senderNumber = prompt("Enter sender number: ")
        searchByNumber(senderNumber);
    }
    else if(option == 2)
        sortMessagesBasedOnlength();
    else
        console.log("Invalid Option");
    input = prompt("Type yes to continue or quit to stop: ")
}