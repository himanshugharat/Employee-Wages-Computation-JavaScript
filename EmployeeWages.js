const EMP_RATE_PER_HOUR = 20;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const MIN_NUM_OF_DAYS = 20;
let empWages = 0;
let empHrs = 0;
let totalWages = 0;
let presentCheck = parseInt(Math.random() * 10) % 3;
for (let days = 0; days < MIN_NUM_OF_DAYS; days++) {
    switch (presentCheck) {
        case IS_FULL_TIME:
            empHrs = 8;
            break;
        case IS_PART_TIME:
            empHrs = 4;
            break;
        default:
            empHrs = 0;
            break;
    }
    empWages = empHrs * EMP_RATE_PER_HOUR;
    totalWages += empWages;
    console.log("EMployee daily wages are " + empWages);
}
console.log("total monthly wages" + totalWages)