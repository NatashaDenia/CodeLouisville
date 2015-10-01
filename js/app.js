//Prevent answer from being seen/*From api.jquery.com*/
//Solution: Hide answer and reveal them through user interaction

//1, Hide answer
$(".answer span").hide();
//2, Add a button
$(".answer").append("<button>Reveal Answer.</button>");
// 3, When button pressed
$("button").click(function(){ /*Events*/
  //3.1, Show answer
  $(".answer span").show();
  //3.2, Get rid of button
  $(this).remove();  /*Manipulation*/
});
