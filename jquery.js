
$(document).ready(function () {
$("#designdiv").show();
$("#webdiv").hide();
$("#martdiv").hide();
$("#itdiv").hide();
$("#perdiv").hide();
$("#busdiv").hide();

$("#designbtn").click(function () {
$("#designdiv").show();
$("#webdiv").hide();
$("#martdiv").hide();
$("#itdiv").hide();
$("#perdiv").hide();
$("#busdiv").hide();
})

$("#webbtn").click(function () {
$("#designdiv").hide();
$("#webdiv").show();
$("#martdiv").hide();
$("#itdiv").hide();
$("#perdiv").hide();
$("#busdiv").hide();
})
$("#martbtn").click(function () {
$("#designdiv").hide();
$("#webdiv").hide();
$("#martdiv").show();
$("#itdiv").hide();
$("#perdiv").hide();
$("#busdiv").hide();
})
$("#itbtn").click(function () {
$("#designdiv").hide();
$("#webdiv").hide();
$("#martdiv").hide();
$("#itdiv").show();
$("#perdiv").hide();
$("#busdiv").hide();
})
$("#perbtn").click(function () {
$("#designdiv").hide();
$("#webdiv").hide();
$("#martdiv").hide();
$("#itdiv").hide();
$("#perdiv").show();
$("#busdiv").hide();
})
$("#busbtn").click(function () {
$("#designdiv").hide();
$("#webdiv").hide();
$("#martdiv").hide();
$("#itdiv").hide();
$("#perdiv").hide();
$("#busdiv").show();
})
})




//  count
// Check if the visitor count is already stored in localStorage
if (localStorage.getItem('visitorCount')) {
  // Retrieve the count value and increment it
  var count = parseInt(localStorage.getItem('visitorCount'));
  count++;
} else {
  // Set the count to 1 if it's not found in localStorage
  var count = 1;
}

// Update the visitor count in localStorage
localStorage.setItem('visitorCount', count);

// Display the count on your webpage
document.getElementById("count").innerText = count;
// count
