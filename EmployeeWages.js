const EMP_RATE_PER_HOUR = 20;
let IS_FULL_TIME = 1;
let empWages = 0;
let empHrs = 0;
let presentCheck = parseInt(Math.random() * 10) % 2;
if (presentCheck == IS_FULL_TIME)
    empHrs = 8;
else
    empHrs = 0
empWages = empHrs * EMP_RATE_PER_HOUR;
console.log("EMployee daily wages are "+empWages);