// function openTab(evt, Netflix) {
//     // Declare all variables
//     var i, tabPanes, tabButtons
  
//   //   // Get all elements with class="tab-pane" and hide them
//     tabPanes = document.getElementsByClassName("tab-pane")
//     for (i = 0; i < tabPanes.length; i++) {
//       tabPanes[i].classList.remove("active")
//     }
  
//     // Get all elements with class="tab-button" and remove the class "active"
//     tabButtons = document.getElementsByClassName("tab-button")
//     for (i = 0; i < tabButtons.length; i++) {
//       tabButtons[i].classList.remove("active")
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(Netflix).classList.add("active")
//     evt.currentTarget.classList.add("active")
//   }
  
//   // Set the default tab to open
//   document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".tab-button").click()
//   })

// function food_delivery(event, Applications) {
    
//   let tabPanes = document.getElementsByClassName("tab-pane");
//   for (let i = 0; i < tabPanes.length; i++) {
//       tabPanes[i].style.display = "none"; 
//   }

//   let tabButtons = document.getElementsByClassName("tab-button");
//   for (let i = 0; i < tabButtons.length; i++) {
//       tabButtons[i].classList.remove("active");
//   }


//   document.getElementById(Applications).style.display = "block";


//   event.currentTarget.classList.add("active");
// }

function openTab(evt, tabId) {
  // Hide all tab panes
  document.querySelectorAll(".tab-pane").forEach(function(tabPane) {
      tabPane.classList.remove("active");
  });

  // Deactivate all tab buttons
  document.querySelectorAll(".tab-button").forEach(function(tabButton) {
      tabButton.classList.remove("active");
  });

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-button").click();
});
