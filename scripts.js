// Sidebar Burger Starting
$(document).ready(function () {
  $(".sidebar-dropdown-menu").slideUp("fast");

  $(
    ".sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a"
  ).click(function (e) {
    e.preventDefault();

    if (!$(this).parent().hasClass("focused")) {
      $(this).parent().parent().find(".sidebar-dropdown-menu").slideUp("fast");
      $(this).parent().parent().find(".has-dropdown").removeClass("focused");
    }

    $(this).next().slideToggle("fast");
    $(this).parent().toggleClass("focused");
  });

  $(".sidebar-toggle").click(function () {
    $(".sidebar").toggleClass("collapsed");

    $(".sidebar.collapsed").mouseleave(function () {
      $(".sidebar-dropdown-menu").slideUp("fast");
      $(
        ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
      ).removeClass("focused");
    });
  });

  $(".sidebar-overlay").click(function () {
    $(".sidebar").addClass("collapsed");

    $(".sidebar-dropdown-menu").slideUp("fast");
    $(
      ".sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown"
    ).removeClass("focused");
  });

  if (window.innerWidth < 768) {
    $(".sidebar").addClass("collapsed");
  }
});
//Active sidebar Link Logic :

//Dorpdown sidebarlink logic :
//item 1 :
$(document).ready(function(){
  $('#hovli').mouseenter(function(){
    $('#hovul').show(225);
  });
});
$(document).ready(function(){
  $('#hovli').mouseleave(function(){
    $('#hovul').hide(225);
  });
});
//item 2 :
$(document).ready(function(){
  $('#hovli2').mouseenter(function(){
    $('#hovul2').show(225);
  });
});
$(document).ready(function(){
  $('#hovli2').mouseleave(function(){
    $('#hovul2').hide(225);
  });
});
//item 3 :
$(document).ready(function(){
  $('#hovli3').mouseenter(function(){
    $('#hovul3').show(225);
  });
});
$(document).ready(function(){
  $('#hovli3').mouseleave(function(){
    $('#hovul3').hide(225);
  });
});
//loader
setTimeout(function(){
  $('.loader-bg').fadeToggle();
},1000);