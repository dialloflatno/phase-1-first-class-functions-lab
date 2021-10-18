
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

    const returnFirstTwoDrivers = drivers => [drivers[0],drivers[1]];
    const returnLastTwoDrivers = drivers => [drivers[2],drivers[3]];

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let fare = 5 ;
let a = 5;

const createFareMultiplier = a => function(fare){ return a * fare; } 
    
    const fareDoubler = createFareMultiplier(2);

    const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnFirstTwoDriver) {
return selectingDrivers[1];

}

console.log(selectDifferentDrivers());
        


