
//jQuery to create a slide down function the toggle allows us to return the slide

$(document).ready(function(){
  $("#slide_button").click(function(){
    $("#slide_panel").slideToggle(3000);
  });
});

//Script below for the smooth scroll back to top

$("#goTop").on("click", function(){
  $("html,body").animate({scrollTop: $("#top").offset().top},6000);
});

//Scrfipt below is for the smooth scroll from the navbar to the about section

$("#about_jump").on("click", function(){
  $("html,body").animate({scrollTop: $("#about").offset().top},4000);
});

//Scrfipt below is for the smooth scroll from the navbar to the contact section

$("#contact_jump").on("click", function(){
  $("html,body").animate({scrollTop: $("#contact_me").offset().top},6000);
});

//Scrfipt below is for the smooth scroll from the anywhere to the top

$("#home_jump").on("click", function(){
  $("html,body").animate({scrollTop: $("#top").offset().top},4000);
});
