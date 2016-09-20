var menuOpen = false;


function menuToggle(){
  document.getElementById("navMenuContainer").style.width = "250px";
  document.getElementById("pagewrapper").style.marginLeft = "250px";
  $("#pagewrapper").css("translateX", "250px");
  $("#workContainer").removeClass("col-xs-offset-4");
  $(".projectBox").removeClass("col-sm-offset-1");
  $(".projectBox").css("margin-left", "20px");


}
function menuClose(){
  document.getElementById("navMenuContainer").style.width = "0";
  document.getElementById("pagewrapper").style.marginLeft = "0";
  $("#pagewrapper").css("translateX", "0px");
  $("#workContainer").addClass("col-xs-offset-4");
  $(".projectBox").addClass("col-sm-offset-1");
  $(".projectBox").css("margin-left", "0px");
}

function sectionActive(){
  $(".sectionTitle").click(function(){
    $(".brand").removeClass("active");
    $(".sectionTitle").removeClass("active");
    $(this).addClass("active");
  });
  $(".brand").click(function(){
    $(".sectionTitle").removeClass("active");
    $(".brand").addClass("active");
  });
}

$(document).scroll(function(){
  var scroll = $(document).scrollTop();
  console.log(scroll);
});

$(document).ready(function(){

  sectionActive();
  $("#menubars").click(function(){
    menuOpen = true;
    console.log(menuOpen);
    menuToggle();
    $("#menubars").hide();

  });
  $(".fa-times").click(function(){
    menuClose();
    menuOpen = false;
    console.log(menuOpen);
    $("#menubars").show();
  });
});
