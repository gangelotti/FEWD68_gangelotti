/* Create an array */
var cityNames = ["NYC", "SF", "LA", "ATX", "SYD"];

/*Use the array to add values to the<select> menu by using a for loop in
JavaScript (don't update the HTML to do this!) */

for (var i = 0; i < cityNames.length; i++) {
  $("#city-type").append("<option>" + cityNames[i] + "</option>");
    }


  // var city = $("city-type").val();
  // if(city == "NYC"){
  //   $("body").attr("class", "nyc");
  
/*When the user changes the input of the drop-down, update the background
image based on what they selected */

/*Use $.append() in your iteration on the drop-down menu */

/*Use the $.attr() function to update HTML classes */

/*Get the value of user input using $.val() */

/*Use the $.change event handler to capture user actions */

/*Use if/else if/else conditionals to control the flow of your application */

/*Display your pseudocode as Javascript comments */
