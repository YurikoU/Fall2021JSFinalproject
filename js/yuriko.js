/*
Student Name:Yuriko Uchida
Student Number: #200448500
Group Name: Group_Yuriko
Program: Computer Programming (CMPG)  
Final Project
Due: December 17, 2021
*/
//Declare variables
var hoursUl = document.querySelector("article#openingHours > ul");
var imgs = document.querySelectorAll('img.pizza');
var articles = document.querySelectorAll("article");
var navs = document.querySelectorAll('header a');
var linkToTop = document.querySelector('footer > div.jumpUpTop > a');
var numOfNavs = navs.length;
var numOfImgs = imgs.length;
var index = 0;


//Add addEventListeners
linkToTop.addEventListener('click', (e) => {  
  //Reset the active nav color
  Array.from(navs).forEach(function(nav) {
    nav.classList.remove("active");
    nav.classList.add("nonActive");
  })
  //Show pizza menu by default
  Array.from(articles).forEach(function (article) {
    article.classList.remove("articleFadein");
  });
  articles[0].classList.add("articleFadein");
  //Delay a bit
  setTimeout((e) => { window.location.href = '#' }, 300);
});
while (index < numOfNavs) {
  navs[index].addEventListener('click', (e) => toggleNavClass(e));
  navs[index].addEventListener('click', (e) => toggleVisibleArticle(e));
  index++;
}
index = 0;
while (index < numOfImgs) {
  imgs[index].addEventListener('mouseover', (e) => enlargeImg(e));
  imgs[index].addEventListener('mouseout', (e) => resetImgSize(e));
  index++;
}





//Switch the class name
function toggleNavClass(e) {
  //Add the class names temporally
  Array.from(navs).forEach(function (nav) {
    nav.classList.remove("active");
    nav.classList.add("nonActive");
  });

  //Make only the clicked link active 
  e.target.classList.add("active");
  e.target.classList.remove("nonActive");
}

//Switch the contents selected visible/invisible
function toggleVisibleArticle(e) {
  //Add the class name temporally
  Array.from(articles).forEach(function (article) {
    article.classList.add("articleNonSelected");
    article.classList.remove("articleFadein");
  });

  let article;
  if (e.target == navs[1]) {
    article = document.getElementById("pizzaMenu");
  } else if (e.target == navs[2]) {
    article = document.getElementById("storeInfo");
  } else if (e.target == navs[3]) {
    article = document.getElementById("openingHours");
  }
  //Make the only article selected visible
  article.classList.add("articleFadein");
}

//Make the image size bigger
function enlargeImg(e) {
  let parentDiv = e.target.parentNode;
  e.target.classList.add("imgFocused");
  parentDiv.classList.add("imgDivFocused");
};

//Reset the image size
function resetImgSize(e) {
  Array.from(imgs).forEach(function (img) {
    img.classList.remove("imgFocused");
    img.parentNode.classList.remove("imgDivFocused");
  })
};


//Set the opening hours
function createOpeningHours() {
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
//Write the opening ours
createOpeningHours();

//Show alert about wearing mask policy
function showMaskAlert() {
  let covidAlertMsg = "Dear All Valued Customers\n\n Due to the prevention from the spread of COVID-19, wearing a mask is mandatory inside the store. Please wear a mask when you come to our store for dining in or picking up your order. Thank you very much for choosing our store and your understanding!\n\nGeorgian Pizza";
  alert(covidAlertMsg);
}
