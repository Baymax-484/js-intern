function openCity(evt, cityName) {
    // Declare all variables
    var i, tabPanes, tabButtons
  
  //   // Get all elements with class="tab-pane" and hide them
    tabPanes = document.getElementsByClassName("tab-pane")
    for (i = 0; i < tabPanes.length; i++) {
      tabPanes[i].classList.remove("active")
    }
  
    // Get all elements with class="tab-button" and remove the class "active"
    tabButtons = document.getElementsByClassName("tab-button")
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active")
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).classList.add("active")
    evt.currentTarget.classList.add("active")
  }
  
  // Set the default tab to open
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-button").click()
  })