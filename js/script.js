$(document).ready(function(){
	var w = window.innerWidth;
	var h = window.innerHeight;


var portfolio = $("#mian");
	var who = $("#who");
  var portfolio = $("#portfolio");
  var services = $("#services");
  var command = $("#command");
  var order = $("#order");
	

  var pages = $([who,portfolio,services,command,order]);
  

  

	who.css({'top':h});
  portfolio.css({'top':h});
  services.css({'top':h});
  command.css({'top':h});
	order.css({'top':h});

    $(".whoCl").click(function(){
        toTop(who);
        setTimeout(function(){remove(who);},500);
    });

    $(".portfolioCl").click(function(){
     toTop(portfolio);
      setTimeout(function(){remove(portfolio);},500);
    });

    $(".servicesCl").click(function(){
        toTop(services);
        setTimeout(function(){remove(services);},500);
    });

    $(".commandCl").click(function(){
        toTop(command);
        setTimeout(function(){remove(command);},500);
    });

    $(".orderCl").click(function(){
        toTop(order);
        setTimeout(function(){remove(order);},500);
    });


    function toTop(name){
      $(".ind").css("z-index","1");
      $(name).css("z-index","2");
      $(name).addClass("toTop");
      $(name).children(".bg").addClass("active");
      

    }
    



    function remove(name){
      
      for(var i=0; i<pages.length; i++){
        if(pages[i]==name){
          continue;
        }
        else{
          $(pages[i]).css("z-index","1");
          $(pages[i]).removeClass("toTop");
          $(pages[i]).children(".bg").removeClass("active");
        }
      }

    	

    }


  });