// main
//헤더 로고 심볼 컬러전환 

$(function(){
    $("#gnb>li:nth-child(1)").hover(function(){
        $(".film").removeClass("bg1");
        $(".film").removeClass("bg2");
        $(".film").removeClass("bg3");
        $(".film").removeClass("bg4");
        $(".film").addClass("bg1");
    });
    $("#gnb>li:nth-child(2)").hover(function(){
        $(".film").removeClass("bg1");
        $(".film").removeClass("bg2");
        $(".film").removeClass("bg3");
        $(".film").removeClass("bg4");
        $(".film").addClass("bg2");
    });
    $("#gnb>li:nth-child(3)").hover(function(){
        $(".film").removeClass("bg1");
        $(".film").removeClass("bg2");
        $(".film").removeClass("bg3");
        $(".film").removeClass("bg4");
        $(".film").addClass("bg3");
    });
    $("#gnb>li:nth-child(4)").hover(function(){
        $(".film").removeClass("bg1");
        $(".film").removeClass("bg2");
        $(".film").removeClass("bg3");
        $(".film").removeClass("bg4");
        $(".film").addClass("bg4");
    });

    // // about go 버튼 hober 블러
    $(function(){
        $(".about_go_blurfilter").hide();
    });

    $("#about_go>.about_go_inner>a").hover(function(){
        $(".about_go_blurfilter").fadeIn(200);
    },
    function(){
        $(".about_go_blurfilter").fadeOut(200);
    });
});


// sub menu
$(function(){
    $("#gnb>li").mouseenter(function(){
        $(this).children(".sub").stop().slideDown(200);
    });
    $("#gnb>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp(200);
    });
});


// main
// opcl slide
$(function(){
    start();
    var imgs = 2;
    var now = 0;

    function start(){
        setInterval(function(){slide();},2000)
    };

    function slide(){
        now = now==imgs ? 0 : now+=1;
        $(".opcl_pic.opening ul li").eq(now-1).fadeOut(700);
        $(".opcl_pic.opening ul li").eq(now).fadeIn(700);

        $(".opcl_pic.closing ul li").eq(now-1).fadeOut(700);
        $(".opcl_pic.closing ul li").eq(now).fadeIn(700);
    };
});

// infobtn pop up
$(function(){
    $(".info_go_guide").click(function(){
        $(".popup_g").fadeIn(250);
    });
    $(".popup_close").click(function(){
        $(".popup").fadeOut(250);
    });

});


// sub1
// overview tap
$(function() {
    $(".ov_content").hide(); 
    $(".overview_list ul li:first").addClass("active").show();
    $(".ov_content:first").show(); 

    //On Click Event
    $(".overview_list ul li").click(function() {

        $(".overview_list ul li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".ov_content").hide();

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn();
        return false;
    });

    $(".overview_list ul li:nth-child(1)").click(function(){
        $(".overview_tit>h2").html("BSFF 개최 개요").css("background-color","#f27351");
    })

    $(".overview_list ul li:nth-child(2)").click(function(){
        $(".overview_tit>h2").html("BSFF의 방향성").css("background-color","#51b969");
    })

    $(".overview_list ul li:nth-child(3)").click(function(){
        $(".overview_tit>h2").html("BSFF의 특징").css("background-color","#6eb7e4");
    })

    $(".overview_list ul li:nth-child(4)").click(function(){
        $(".overview_tit>h2").html("BSFF 프로그램").css("background-color","#ed8890");
    })


});

// pt poster hover

$(function(){
    $(".pt_p_img img").hide();
    $(".pt_p_img .poster_a").show();

    $(".p_color ul li:nth(0)").hover(function(){
        $(".pt_p_img .poster_b").fadeToggle(100);

    });

    $(".p_color ul li:nth(1)").hover(function(){
        $(".pt_p_img .poster_c").fadeToggle(100);
    });

    $(".p_color ul li:nth(2)").hover(function(){
        $(".pt_p_img .poster_d").fadeToggle(100);
    });

});



// sub2
// tap(program list)

$(function() {
    $(".section_inner").hide(); 
    $(".scr_list ul li:nth(2)").addClass("active").show(); 
    $(".section_inner:nth(2)").show(); 

    //On Click Event
    $(".scr_list ul li").click(function() {

        $(".scr_list ul li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".section_inner").hide();

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn();
        return false;
    });

});


// sub3
// sv tab
$(function() {
    $(".sv_info_inner").hide();
    $(".pin").hide();
    $(".pin_o").show();
    $("#sv ul li:first").addClass("active").show();
    $(".sv_info_inner:first").show(); 

    //On Click Event
    $("#sv ul li").click(function() {

        $("#sv ul li").removeClass("active");
        $(this).addClass("active");
        $(".sv_info_inner").hide();

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn();
        return false;
    });

    $("#sv ul li:nth-child(1)").click(function(){
        $(".pin").hide();
        $(".pin_o").show();
    });

    $("#sv ul li:nth-child(2)").click(function(){
        $(".pin").hide();
        $(".pin_g").show();
    });

    $("#sv ul li:nth-child(3)").click(function(){
        $(".pin").hide();
        $(".pin_b").show();
    });


    $("#sv ul li:nth-child(4)").click(function(){
        $(".pin").hide();
        $(".pin_p").show();
    });

    $("#sv ul li:nth-child(5)").click(function(){
        $(".pin").hide();
        $(".pin_y").show();
    });

});



// sub4
// faq accordion
$(function(){
	$(".faq_flex> ul> li").click(function(){
		$(this).children(".faq_answer").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});
$(function(){
	$(".faq_flex> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});
