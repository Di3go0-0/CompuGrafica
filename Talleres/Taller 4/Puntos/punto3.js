function leapYear(Year1, Year2){
    let leapYearCount = 0;
    for(let i = Year1; i <= Year2; i++){
        if(i % 4 == 0 && (i % 100 != 0 || i % 400 == 0)){
            leapYearCount++;
        }
    }
    return leapYearCount;
}

// console.log(leapYear(2000, 2020)); 

export default leapYear;