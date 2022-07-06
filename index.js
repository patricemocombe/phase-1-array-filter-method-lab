// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (drivers, name) {
    return drivers.filter(
        (param) => param.toLowerCase() === name.toLowerCase()
    );
} 

function fuzzyMatch(drivers, name2) {
    return drivers.filter(
        (param) =>
        param.toLowerCase().indexOf(name2.toLowerCase()) === 0
    );
    }


function matchName(drivers, name3) {
    return drivers.filter((record) => record.name === name3);

}