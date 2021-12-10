/*
Student Name:Yuriko Uchida
Student Number: #200448500
Group Name: Group_Yuriko
Program: Computer Programming (CMPG)  
Final Project
Due: December 17, 2021
*/
const body = document.body;
var hoursUl = document.querySelector("aside.operaHour > ul");

function createOperatingHours() {
  //Create new elements
  let weekdayLi = document.createElement('li');
  let weekendLi = document.createElement('li');
  let holidayLi = document.createElement('li');
  //Set the text
  weekdayLi.textContent = "Weekdays: 5pm - 10pm";
  weekendLi.textContent = "Saturday and Sunday: 11am - 11pm";
  holidayLi.innerHTML = "<i>* Every Monday closed. Holiday hours may vary.</i>";
  //Remove the dot
  weekdayLi.style.listStyle = "none";
  weekendLi.style.listStyle = "none";
  holidayLi.style.listStyle = "none";
  //Append the lists to the <ul>
  hoursUl.appendChild(weekdayLi);
  hoursUl.appendChild(weekendLi);
  hoursUl.appendChild(holidayLi);
}

createOperatingHours();