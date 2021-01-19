function myFunction() {
  var navBar = document.getElementById("main-nav")

  if (navBar.className === "top-nav") {
    navBar.className += "responsive"
  } else {
    navBar.className = "top-nav"
  }
}
