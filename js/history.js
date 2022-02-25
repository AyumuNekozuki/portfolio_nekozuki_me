$(()=>{

  // 経歴
  $('section.history .button_area .keireki_but').on('click',()=>{
    $('section.history .tablearea.award').fadeOut(500);
    $('section.history .tablearea.keireki').delay(500).fadeIn(500);
    $('section.history .button_area .award_but').removeClass('active');
    $('section.history .button_area .keireki_but').addClass('active');
  });

  // 受賞歴
  $('section.history .button_area .award_but').on('click',()=>{
    $('section.history .tablearea.keireki').fadeOut(500);
    $('section.history .tablearea.award').delay(500).fadeIn(500);
    $('section.history .button_area .keireki_but').removeClass('active');
    $('section.history .button_area .award_but').addClass('active');
  });

});