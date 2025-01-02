
let year = prompt("Enter a year:");
year = parseInt(year);
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
if (isLeapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}