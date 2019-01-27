//Unix Epach - January 1st 1970 00:00:00
//0 shows above exact time
//if we want to move in the future we would add + milliseconds
//if we want to move in future we would add - milliseconds unix Epach
//getting time stamp
const timeStamp = new Date().getTime();
console.log(timeStamp); //shows current time in milliseconds
const myDate = new Date(timeStamp).getFullYear();
console.log(myDate); //2019

/*
const now = new Date();
console.log(now.toString());
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of month: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

const then = new Date("December 25 1992 06:25:01");
console.log(then.toString());
console.log(`Year: ${then.getFullYear()}`);
console.log(`Month: ${then.getMonth()}`);
console.log(`Day of month: ${then.getDate()}`);
console.log(`Hours: ${then.getHours()}`);
console.log(`Minutes: ${then.getMinutes()}`);
console.log(`Seconds: ${then.getSeconds()}`);

*/

//challenges

const dateOne = new Date("March 1 2018 12:00:00");
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();
if (dateOneTimestamp < dateTwoTimestamp) {
  console.log(dateOne.toString()); //condition wins
} else if (dateTwoTimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
}

/* How momentjs library works
const now = moment();
console.log(now.toString()); //Sun Jan 27 2019 19:20:24 GMT+0530
//now.minute(1); //setting minute of hours to 01
//console.log(now.minute()); //minute of time

now.add(1, "year").subtract(20, "days"); //Tue Jan 07 2020 19:25:40 GMT+0530
console.log(now.toString());
//Novemenber 3rd, 2003
console.log(now.format("MMMM Do, YYYY")); //January 7th, 2020
console.log(now.fromNow());
//now.subract(1, "week").subtract(20, "days");
//console.log(now.fromNow()); 1 week ago

const nowTimeStamp = now.valueOf();
console.log(nowTimeStamp); //1578405836728
console.log(moment(nowTimeStamp).toString()); //Tue Jan 07 2020 19:34:52 GMT+0530



const birthday = moment();
birthday
  .year(1992)
  .month(11)
  .date(25);
console.log(birthday.format("MMM D, YYYY")); //Dec 25, 1992
*/
