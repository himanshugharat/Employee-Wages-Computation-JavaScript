//constant
const EMP_RATE_PER_HOUR = 20;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const MIN_NUM_OF_DAYS = 20;
const MAX_HOURS_A_MONTH = 100;
//variables
let totalEmpWages = 0;
let totalEmpHrs = 0;
let totalWages = 0;
let totalWorkingDays = 0

function random() {
    return parseInt(Math.random() * 10) % 3;
}
function employePresentCheck() {
    let presentCheck = random();
    switch (presentCheck) {
        case IS_FULL_TIME:
            return empHrs = 8;
            break;
        case IS_PART_TIME:
            return empHrs = 4;
            break;
        default:
            return empHrs = 0;
            break;
    }
}

function dailyWages() {
    let empWages = 0;
    empHrs = employePresentCheck();
    return empWages = empHrs * EMP_RATE_PER_HOUR;
}

function monthlyWages() {
    empWages = dailyWages();
    return totalWages += empWages;
}

function wageCalculator() {
    while (totalEmpHrs < MAX_HOURS_A_MONTH && totalWorkingDays < MIN_NUM_OF_DAYS) {
        let empDailyWages = dailyWages();
        let empWages = monthlyWages();
        totalWorkingDays++;
        console.log("Employee daily wages are " + empDailyWages + " and till date " + totalWorkingDays
            + " total wages are " + totalWages);
    }
    console.log("total monthly wages" + totalWages);
    console.log("total working days" + totalWorkingDays);
}
wageCalculator();