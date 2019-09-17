if($('.cust-tabs').length){
	$('.cust-tabs').each(function(){
	  	var thisElem = $(this),
          thisElemCont = thisElem.find('.tab-sect').children();
   
		  thisElemCont.hide();
		  thisElem.find('ul.tab-links li').click(function(index){
        var activeTab = $(this).index();
         if(!$(this).hasClass('active')){
              thisElem.find('ul.tab-links li').removeClass('active');
              $(this).addClass('active');
              thisElem.find('.tab-cont').stop().animate({"opacity":0},400, function(){
                thisElem.find('.tab-cont').stop().hide().css({"opacity":1});
                $($(thisElemCont)[activeTab]).stop().fadeIn();
              })
          }
	  	}).first().trigger('click');
	})
}