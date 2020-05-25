// Functionality #1

let footer= document.getElementsByTagName('footer');
let count = 0

let onFooterClick = function() {
  count += 1
  console.log("clic numéro " + count);
}

footer[0].addEventListener("click", onFooterClick);

// Functionality #2

let navbarHeader = document.getElementById("navbarHeader");
let navbarIcon = document.getElementsByClassName("navbar-toggler-icon");

let menuCollapse = function() {
  if (navbarHeader.className.includes("collapse")) {
    navbarHeader.className = "bg-dark";
  } else {
    navbarHeader.className = "collapse bg-dark";
  }
}

navbarIcon[0].addEventListener("click", menuCollapse);

// Functionality #3

let cardBodyOne = document.getElementsByClassName("card-body")[0];
let editCardNumberOne = cardBodyOne.getElementsByTagName("button")[1];

let cardRedText = function() {
  cardBodyOne.className = "card-body text-danger";
}

editCardNumberOne.addEventListener("click", cardRedText);

// Functionality #4

let cardBodyTwo = document.getElementsByClassName("card-body")[1];
let editCardNumberTwo = cardBodyTwo.getElementsByTagName("button")[1];

let cardGreenText = function() {
  if (cardBodyTwo.className.includes("text-success")) {
    cardBodyTwo.className = "card-body";
  } else {
    cardBodyTwo.className = "card-body text-success";
  }
}

editCardNumberTwo.addEventListener("click", cardGreenText);

// Functionality #5

let navbar = document.getElementsByClassName("navbar")[0]
let bootstrapLink = document.getElementsByTagName("link")[0]

let modifyBootstrapLink = function () {
  if (bootstrapLink.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    bootstrapLink.href = "";
  } else {
    bootstrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}

navbar.addEventListener("dblclick", modifyBootstrapLink)