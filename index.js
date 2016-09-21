var menuOpen = false;

var projects = [{
  name: "Metro Better",
  info: "A project that displays information the next incoming train to any Metro station in the Washington D.C. Metro Area. I made this project for myself to practice pulling information in real-time from a large scale API. The project uses HTML, CSS, Javascript, jQuery and Bootstrap."
}, {
  name: "Twitch Viewer",
  info: "This project came as a challenge from Free Code Camp to use the Twitch.tv API to create a page on which users could see if certain featured streamers were currently online.  I decided to expand on it by embedding a video player directly into the site and including the top 10 currently online streamers for Starcraft II."
}, {
  name: "Laath Martin Photography",
  info: "My first site that I created for a friend who happens to be a skilled photographer.  He has a functioning website but I felt I could make it look a bit cleaner and it gave me a chance to apply the skills I had been learning to the real world."
}, {
  name: "Pomodoro Timer",
  info: "Part of the Free Code Camp challenges. This project is a Pomodoro Timer, used as an effective productivity tool.  The timer runs for a period of work, then changes to a shorter timer for a break from work, then repeats the work period.  It includes a clock at the bottom and color transitions as the timer approaches the end of a cycle."
}, {
  name: "Javascript Calculator",
  info: "This is a fully functional calculator made with Javascript.  The calculator is designed to look like a Texas Instruments TI-108 calculator which were what I used in grade school."
}, {
  name: "Simon",
  info: "This project is a version of the old Simon Says game which repeats a color and sound pattern that the player needs to match.  It goes up to 20 elements in the pattern before the player wins."
}];

function projectPop (){


}


function menuToggle(){
  document.getElementById("navMenuContainer").style.width = "250px";
  document.getElementById("pagewrapper").style.marginLeft = "250px";
  $("#pagewrapper").css("translateX", "250px");
  $("#workContainer").removeClass("col-xs-offset-4");
  $(".projectBox").removeClass("col-sm-offset-1");

  menuOpen = true;


}
function menuClose(){
  document.getElementById("navMenuContainer").style.width = "0";
  document.getElementById("pagewrapper").style.marginLeft = "0";
  $("#pagewrapper").css("translateX", "0px");
  $("#workContainer").addClass("col-xs-offset-4");
  $(".projectBox").addClass("col-sm-offset-1");
  menuOpen = false;
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

function workActive () {
  $(".worklist").click(function(){
    $(".worklist").removeClass("active");
    $(this).addClass("active");
  });
}

$(document).ready(function(){
  $("#menubars").click(function(){
    if(menuOpen === false){
      menuToggle();
    }else{
      menuClose();
    }
  });

  projectPop();
  sectionActive();
  workActive();

  $(".fa-times").click(function(){
    menuClose();
    menuOpen = false;
  });
});
