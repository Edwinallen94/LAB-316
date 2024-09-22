// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  let newLink = document.createElement("a");

  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute("href", link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  newLink.textContent = link.text;
  // Append the new element to the topMenuEl element.

  topMenuEl.appendChild(newLink);
});

//part 3

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
// subMenuEl.style.top = "100%";
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// part 3.1

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//part 4

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll("#top-menu a");

// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();

  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (e.target.tagName !== "A") return;

  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. Here is what it should look like so far, with "CATALOG" active:
  e.target.classList.add("active");

  const clickedLink = menuLinks.find(
    (link) => link.text == e.target.textContent
  );
  //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT),
  if (clickedLink && clickedLink.subLinks) {
    //set the CSS top property of subMenuEl to 100%
    subMenuEl.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
  } else {
    //Otherwise, set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = "0";
  }
  // console.log(e.target.textContent);
});
// Clear the current contents of subMenuEl.

// Create an <a> element.

// Set the element's content to the value of the text property of the "link" object.

// Iterate over the subLinks array, passed as an argument, and for each "link" object:
function buildSubMenu(subLinks) {
  //// Add an href attribute to the <a>,
  subMenuEl.innerHTML = "";
  // with the value set by the href property of the "link" object.
  subLinks.forEach((link) => {
    let subLinkEl = document.createElement("a");

    subLinkEl.setAttribute("href", link.href);
    subLinkEl.textContent = link.text;

    // Append the new element to the subMenuEl.
    subMenuEl.appendChild(subLinkEl);
  });
}
