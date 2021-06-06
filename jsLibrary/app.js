//Sidenav 
$(() => {
  $('.toggle-wrap').on('click', function () {
    $(this).toggleClass('active');
    $('aside').animate({ width: 'toggle' }, 200);
  })
});


$(document).ready(function () {

  //File upload
  $("#actual-btn").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-chosen").html(fileName);

    if (fileName != ' ') {
      $(".uploadPage_next .next_btn").css({ opacity: 1 })
    }

  })
  
 
  //next button

  $("#img_redio label").change(function(e){
    if($('input[name="network"]:is(:checked)')) {
      $("#emmPovList_next").css({'pointer-events' : 'painted','opacity' : '1'})
      $("#emmPovList_skip").css({'visibility' : 'hidden'})
    }
  })

})
