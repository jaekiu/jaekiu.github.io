// Options

var slide_time = 1200; // The time it takes to complete an entire transition
var change_point = slide_time / 2; // Calculates when the slide should change
var right_arrow = $('.easytransitions_navigation__right'); // Element that trigger move right
var left_arrow = $('.easytransitions_navigation__left'); // Element that trigger move left
var slide_amount = $('.easytransitions section').length; // How many slides
var current_slide = 1; // Starting slide
var about = $('.about');
var projects = $('.projects'); // projects navigation

right_arrow.click(function(){
  if(current_slide < slide_amount){
    current_slide++;
    close_modals();
    var active_slide = $('.active_slide').next()
    set_transition(active_slide);
    setTimeout(function(){
      $('.active_slide').hide().removeClass('active_slide').next().addClass('active_slide').show();
    },change_point);
  }
});

left_arrow.click(function(){
  if(current_slide > 1){
    current_slide--;
    close_modals();
    var active_slide = $('.active_slide').prev()
    set_transition(active_slide);
    setTimeout(function(){
      $('.active_slide').hide().removeClass('active_slide').prev().addClass('active_slide').show();
    },change_point);
  }
});

// NAVIGATION BAR !!!!!!!!!!!!!!!
// ABOUT NAVIGATION
about.on('click', function(){
  if(current_slide !== 1){
    current_slide = 1;
    close_modals();
    var active_slide = $('#about_slide')
    set_transition(active_slide);
    setTimeout(function(){
      $('.active_slide').hide().removeClass('active_slide');
      $('#about_slide').addClass('active_slide').show();
    },change_point);
  }
});

// PROJECTS NAVIGATION
projects.on('click', function(){
  if(current_slide !== 2){
    current_slide = 2;
    close_modals();
    var active_slide = $('#projects_slide')
    set_transition(active_slide);
    setTimeout(function(){
      $('.active_slide').hide().removeClass('active_slide');
      $('#projects_slide').addClass('active_slide').show();
    },change_point);
  }
});

// Set transition type

function set_transition(tran){
  var transition_type = tran.data('transition')
  $('.easytransitions_transition div').each(function(){
    $(this).removeClass(this.className.split(' ').pop());
    setTimeout(function(){
      $('.easytransitions_transition div').addClass(transition_type)
    },100)

  })
}


// MODALS
// Get the modal
var modal_1_content = document.getElementById("modal_1_content");
var modal_2_content = document.getElementById("modal_2_content");
var modal_3_content = document.getElementById("modal_3_content");

// Get the button that opens the modal
var modal_1 = document.getElementById("modal_1");
var modal_2 = document.getElementById("modal_2");
var modal_3 = document.getElementById("modal_3");

// Get the <span> element that closes the modal
var span_1 = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close")[1];
var span_3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
modal_1.onclick = function() {
    modal_1_content.style.display = "block";
}
modal_2.onclick = function() {
    modal_2_content.style.display = "block";
}
modal_3.onclick = function() {
    modal_3_content.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span_1.onclick = function() {
    modal_1_content.style.display = "none";
}
span_2.onclick = function() {
    modal_2_content.style.display = "none";
}
span_3.onclick = function() {
    modal_3_content.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_1_content) {
        modal_1_content.style.display = "none";
    }
    if (event.target == modal_2_content) {
        modal_2_content.style.display = "none";
    }
    if (event.target == modal_3_content) {
        modal_3_content.style.display = "none";
    }
}

// Close all when changing pages
function close_modals() {
  modal_1_content.style.display = "none";
  modal_2_content.style.display = "none";
  modal_3_content.style.display = "none";
}
