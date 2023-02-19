// # Artists

// Create a list of at least five top musical artists that describes each of them with the following details.

// - name
// - genre
// - gross sales
// - whether the artist has won a grammy
// - year the artist was born
// - a `charities` key that describes whether or not the artist in involved with the following good causes
//     - Red Cross
//     - UNICEF
//     - Doctors Without Borders

const artists = [
    // one
    {
    name : "Drake",
    genre : "Hip-Hop",
    "gross sales" : 1,
    wonGrammy : false,
    yearBorn : 1860,
    doesCharities : {
        "Red Cross" : false,
        UNICEF : false,
        "Doctors Without Borders" : false
    }
    },
    
    // two
    {
    name : "Madonna",
    genre : "Vogue",
    "gross sales" : 0,
    wonGrammy : false,
    yearBorn : 1560,
    doesCharities : {
        "Red Cross" : false,
        UNICEF : false,
        "Doctors Without Borders" : false
    }
    },
    
    // three
    {
    name : "Mozart",
    genre : "Classical",
    "gross sales" : 10000000000000000000000000,
    wonGrammy : true,
    yearBorn : 1260,
    doesCharities : {
        "Red Cross" : false,
        UNICEF : false,
        "Doctors Without Borders" : false
    }
    },
    
    // four
    {
    name : "Riri",
    genre : "R&B",
    "gross sales" : 2.5,
    wonGrammy : false,
    yearBorn : 2023,
    doesCharities : {
        "Red Cross" : false,
        UNICEF : false,
        "Doctors Without Borders" : false
    }
    },
    
    // five
    {
    name : "Lil Wayne",
    genre : "Hip-Hop",
    "gross sales" : 1000,
    wonGrammy : true,
    yearBorn : 1975,
    doesCharities : {
        "Red Cross" : true,
        UNICEF : true,
        "Doctors Without Borders" : true
    }
    },
    
];

console.log(artists);
