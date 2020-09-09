const EMP_RATE_PER_HOUR = 20;
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let empWages = 0;
let empHrs = 0;
let presentCheck = parseInt(Math.random() * 10) % 3;
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
console.log("EMployee daily wages are " + empWages);