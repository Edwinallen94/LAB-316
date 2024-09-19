// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEL = document.getElementById("top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEL.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEL.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEL.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  let newLink = document.createElement("a");

  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute("href", link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  newLink.textContent = link.text;
  // Append the new element to the topMenuEl element.

  topMenuEL.appendChild(newLink);
});
