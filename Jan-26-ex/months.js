// Take a look at the table below. You’re probably used to organizing data this way but for this exercise, you must convert it to an object. Name the object months.Take a look at the table below. You’re probably used to organizing data this way but for this exercise, you must convert it to an object. Name the object months.

// Month Number | Month Abbreviation | Month Name | Month Days Count

// After you have create the object, log the following values to the console.

// - the number of days in September
// - the abbreviation for February
// - what the name of the fourth month is

let months = {
    month1: {
        monthNumber: 1,
        monthAbbreviation: 'Jan' ,
        monthName: 'January',
        monthDaysCount : 31
    },
    
    month2: {
        monthNumber: 2,
        monthAbbreviation: 'Feb' ,
        monthName: 'February',
        monthDaysCount : 28
    },
    
    month3: {
        monthNumber: 3,
        monthAbbreviation: 'Mar' ,
        monthName: 'March',
        monthDaysCount : 31
    },

    month4: {
        monthNumber: 4,
        monthAbbreviation: 'Apr' ,
        monthName: 'April',
        monthDaysCount : 30
    },
    
    month5: {
        monthNumber: 5,
        monthAbbreviation: 'May' ,
        monthName: 'May',
        monthDaysCount : 31
    },
    
    month6: {
        monthNumber: 6,
        monthAbbreviation: 'Jun' ,
        monthName: 'June',
        monthDaysCount : 30
    },
    
    month7: {
        monthNumber: 7,
        monthAbbreviation: 'Jul' ,
        monthName: 'July',
        monthDaysCount : 31
    },
    
    month8: {
        monthNumber: 8,
        monthAbbreviation: 'Aug' ,
        monthName: 'August',
        monthDaysCount : 31
    },
    
    month9: {
        monthNumber: 9,
        monthAbbreviation: 'Sep' ,
        monthName: 'September',
        monthDaysCount : 30
    },
    
    month10: {
        monthNumber: 10,
        monthAbbreviation: 'Oct' ,
        monthName: 'October',
        monthDaysCount : 31
    },
    
    month11: {
        monthNumber: 11,
        monthAbbreviation: 'Nov' ,
        monthName: 'November',
        monthDaysCount : 30
    },
    
    month12: {
        monthNumber: 12,
        monthAbbreviation: 'Nov' ,
        monthName: 'November',
        monthDaysCount : 30
    } 
};


// I solved this problem this way because I understood that `months` needed to be an object. 
console.log(months.month9.monthDaysCount);
console.log(months.month2.monthAbbreviation);
console.log(months.month4.monthName);