var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
////////////////////////////////////////////////////////
$("a.tablink1").click(
    function(){
        $("a.tablink1").removeClass('active');
        $(this).addClass('active');
    }
);
////////////////////////////////////////////////////////
function openNav(e) {
  document.getElementById("myNav"+e).style.display = "block";
}

function closeNav(e) {
  document.getElementById("myNav"+e).style.display = "none";
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
var dict = {
    "About":1, "Work":2,"Papers":3,"Achievements":4,"CV":5
}
var i1 = 1
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  i1 = dict[pageName]
  // Remove the background color of all tablinks/buttons
//   tablinks = document.getElementsByClassName("tablink1");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "black";
//      tablinks[i].style.Color = "";
//   }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  document.getElementById(pageName).style.color = black;
  // Add the specific color to the button used to open the tab content
  //elmnt.style.backgroundColor = "white";
  //$("a.tablink1").removeClass('active');
  //$(pageName).addClass('active');
  //elmnt.classList.add('active');
 
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
var acc = document.getElementsByClassName("accordion");
var i;
//function min(a,b){
//   if (screen.width<screen.height){
//    return b;
//   }
//   return a;
//}
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

$(document).ready(function() {
  
  // Add class to mailto link
  // Needed to separate the disabling of the default action AND copy email to clipboard
  $('a[href^=mailto]').addClass('mailto-link');

  var mailto = $('.mailto-link');
  var messageCopy = 'Click to copy email address';
  var messageSuccess = 'Email address copied to clipboard';
  
  mailto.append('<span class="mailto-message"></span>');
  $('.mailto-message').append(messageCopy);
  
  // Disable opening your email client. yuk.
  $('a[href^=mailto]').click(function() {
    return false; 
  })
  
  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function() {
    var href = $(this).attr('href');
    var email = href.replace('mailto:', '');
    copyToClipboard(email);
    $('.mailto-message').empty().append(messageSuccess);
    setTimeout(function() {
      $('.mailto-message').empty().append(messageCopy);}, 2000); 
  });
  
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
/////////////////////// prev next //////////////////////////
// var no_box = document
// .querySelector('.no-box');
  
//var i = 1;

function prev() {

// Start position 
if (i1 == 2) {

    // Add disabled attribute on
    // prev button
    document.getElementsByClassName(
            'prev').disabled = true;

    // Remove disabled attribute 
    // from next button 
    document.getElementsByClassName(
            'next').disabled = false;
    i1--;
    $("a.tablink1").removeClass('active');
    $("a.a1").addClass('active')
    return openPage('About', this,'var(--rgb)')
}
if (i1==3) {
    i1--;
    $("a.tablink1").removeClass('active');
    $("a.a2").addClass('active')
    return openPage('Work', this,'var(--rgb)')
}
if (i1==4) {
    i1--;
    $("a.tablink1").removeClass('active');
    $("a.a3").addClass('active')
    return openPage('Papers', this,'var(--rgb)')
}
if (i1==5) {
    i1--;
    $("a.tablink1").removeClass('active');
    $("a.a4").addClass('active')
    return openPage('Achievements', this,'var(--rgb)')
}
// if (i==4) {
//     i--;
//     return openPage('CV', this,'var(--rgb)')
// } 
}

function next() {

// End position
if (i1==1) {
    i1++;
    $("a.tablink1").removeClass('active');
    $("a.a2").addClass('active')
    return openPage('Work', this,'var(--rgb)')
}
if (i1==2) {
    i1++;
    $("a.tablink1").removeClass('active');
    $("a.a3").addClass('active')
    return openPage('Papers', this,'var(--rgb)')
}
if (i1==3) {
    i1++;
    $("a.tablink1").removeClass('active');
    $("a.a4").addClass('active')
    return openPage('Achievements', this,'var(--rgb)')
}
if (i1 == 4) {

    // Add disabled attribute on 
    // next button
    document.getElementsByClassName(
            'next').disabled = true;

    // Remove disabled attribute
    // from prev button
    document.getElementsByClassName(
            'prev').disabled = false;
    i1++;
    $("a.tablink1").removeClass('active');
    $("a.a5").addClass('active')
    return openPage('CV', this,'var(--rgb)')
}
}

// function setNo() {

// // Change innerhtml
// return no_box.innerHTML = i;
// }