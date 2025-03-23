document.addEventListener("DOMContentLoaded", function () {
  // links for assignments
  const links = [
    { name: "Home", url: "finalProject.html" },
    { name: "Assignment 1", url: "HassellTylerAssignment1.html" },
    { name: "Assignment 2", url: "HassellTylerAssignment2.html" },
    { name: "Assignment 3", url: "HassellTylerAssignment3.html" },
    { name: "Assignment 4", url: "HassellTylerAssignment4.html" },
    { name: "Assignment 5", url: "HassellTylerAssignment5.html" },
    { name: "Assignment 6", url: "HassellTylerAssignment6.html" },
    { name: "Assignment 7", url: "HassellTylerAssignment7.html" },
  ];

  // current page's URL
  const currentUrl = window.location.pathname.split("/").pop();

  // dropdown menu container
  const nav = document.getElementById("dropdown-menu");
  const select = document.createElement("select");

  // options to dropdown
  links.forEach(link => {
    const option = document.createElement("option");
    option.value = link.url;
    option.textContent = link.name;

    // mark the current page
    if (link.url === currentUrl) {
      option.selected = true;
    }

    select.appendChild(option);
  });

  // event listener for navigation
  select.addEventListener("change", function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });

  // add dropdown to page
  nav.appendChild(select);

  // style before CSS
  select.style.margin = "10px";
  select.style.padding = "5px";
});

