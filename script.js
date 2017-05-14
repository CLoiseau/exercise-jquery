$( document ).ready(function(){
  console.log('ready');
  // detecter l'événement click sur le titre de l'accordéon
});

$('.accordion-title').click(function(e){

  $(e.currentTarget)
  .parents('.accordion')
  .siblings()
  .find('.accordion-body')
  .slideUp();
});


$('.accordion-title').click(function(e){
  $(e.currentTarget).parent().next().slideToggle();

});


$('.tab-nav > li').click(function (e){
let id = $(e.currentTarget)
  .children('a')
  .attr('href');

$(id).siblings().hide('slow');
$(id).show('slow');

});
