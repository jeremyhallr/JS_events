// Functionality #1

let footer= document.getElementsByTagName('footer');
let count = 0

function onFooterClick() {
  count += 1
  console.log("clic numéro " + count);
}

footer[0].addEventListener("click", onFooterClick);

// Functionality #2

let navbarHeader = document.getElementById("navbarHeader");
let navbarIcon = document.getElementsByClassName("navbar-toggler-icon");

function menuCollapse() {
  navbarHeader.classList.toggle("collapse");
}

navbarIcon[0].addEventListener("click", menuCollapse);

// Functionality #3

let cardBodyOne = document.getElementsByClassName("card-body")[0];
let editCardNumberOne = cardBodyOne.getElementsByTagName("button")[1];

function cardRedText() {
  cardBodyOne.style.color = "red";
}

editCardNumberOne.addEventListener("click", cardRedText);

// Functionality #4

let cardBodyTwo = document.getElementsByClassName("card-body")[1];
let editCardNumberTwo = cardBodyTwo.getElementsByTagName("button")[1];

function cardGreenText() {
  if (cardBodyTwo.style.color == "green") {
    cardBodyTwo.style.color = "";
  } else {
    cardBodyTwo.style.color = "green";
  }
}

editCardNumberTwo.addEventListener("click", cardGreenText);

// Functionality #5

let navbar = document.getElementsByClassName("navbar")[0]
let bootstrapLink = document.getElementsByTagName("link")[0]

function modifyBootstrapLink() {
  if (bootstrapLink.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    bootstrapLink.href = "";
  } else {
    bootstrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}

navbar.addEventListener("dblclick", modifyBootstrapLink)

// Functionality #6

let viewCards = document.getElementsByClassName("btn btn-sm btn-success");
console.log(viewCards[5]);
let cards = document.getElementsByClassName("card");

function changeCardSize() {
  if (cards[count].style.width == "20%") {
    cards[count].style.width = "100%";
  } else {
    cards[count].style.width = "20%";
  }
}

for (let count = 0; count < cards.length; count++) {
  viewCards[count].addEventListener("mousemove", changeCardSize);
}

// Functionality #7

let rightArrow = document.getElementsByClassName("btn btn-secondary my-2")[0]
console.log(rightArrow)

function shiftRight() {
  album = document.getElementsByClassName("col-md-4")[0].parentNode
  let first_card = document.getElementsByClassName("col-md-4")[0]
  let last_card = document.getElementsByClassName("col-md-4")[5]
  album.insertBefore(last_card, first_card);
}

rightArrow.addEventListener("click", shiftRight);
