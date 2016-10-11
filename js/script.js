function change(){
	var bg = document.getElementById("bg");

	bg.classList.add("active");
}


function second(){

	$("#second").fadeIn(2000)
}



$(document).ready(function(){
	var w = window.innerWidth;
	var h = window.innerHeight;



	var main = $("#main");
	var second = $("#second");

  var pages = $([main,second]);
  

  

	main.css({'top':h});
	second.css({'top':h});

    $(".one").click(function(){
        
        toTop(main);
        setTimeout(function(){remove(main);},500);
        //if($(main).position().top = "0px"){remove(main);}
        
      
     
    });

    $(".two").click(function(){
       
     toTop(second);
      setTimeout(function(){remove(second);},500);
    });


    function toTop(name){
      $(".ind").css("z-index","1");
      $(name).css("z-index","2");
      $(name).addClass("toTop");
      $(name).children("#bg").addClass("active");
      

    }
    



    function remove(name){
      
      for(var i=0; i<pages.length; i++){
        if(pages[i]==name){
          continue;
        }
        else{
          $(pages[i]).css("z-index","1");
          $(pages[i]).removeClass("toTop");
          $(pages[i]).children("#bg").removeClass("active");
        }
      }

    	

    }


  });