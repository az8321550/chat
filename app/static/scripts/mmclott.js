$(function () {
    window.clickMMC = function () {
        $(".ymmc_num_ul li").find("div").css({
            "margin-top": "0px"
        });
        $(".hand_down").show();
        $(".hand_up").hide();
        setTimeout(function () {
            $(".hand_down").hide();
            $(".hand_up").show();
        }, 300);
        $(".ymmc_num_ul li").find("span").hide();
        $(".ymmc_num_ul li").find("div").show();
        $.each($(".ymmc_num_ul li").find("div"), function (i, n) {
            setTimeout(function () {
                $(n).animate({
                    "margin-top": "-11979px"
                }, 6000);
            }, i * 200);
        });

    };

    // $(".handle_hand").click(function(){
    // 	$(".hand_up").hide();
    // 	$(".hand_down").show();
    // 	setTimeout(function(){
    // 		$(".hand_up").show();
    // 		$(".hand_down").hide();
    // 	},300);
    // 	$(".ymmc_num_ul li").find("div").animate({"margin-top":"-11979px"},6000);
    // 	setTimeout(function(){
    // 		$(".ymmc_num_ul li").find("div").animate({"margin-top":"0px"},10)
    // 	},6000);
    // })
    $(".mmc_example").find("a").hover(
        function () {
            $(this).find("div").show();
        },
        function () {
            $(this).find("div").hide();
        }
    )
    $(".lottery-footer").find("a.sqzk_1").click(function () {
        $(".lott_his_mid").slideToggle("slow");
        $(this).toggleClass("sqzk_2");
    })
    $(".lott_sub_bt").find("input.inputlott_bt1").click(function () {
        $(".mmclott_mid").slideUp("1000");
        $(this).hide();
        $(".inputlottdiv").show();
        $(".zzc_kaijiang").show();
    })
    $(".lott_sub_bt").find("input.inputlott_bt3").click(function () {
        $(".mmclott_mid").slideDown("1000");
        $(".inputlottdiv").hide();
        $(".inputlott_bt1").show();
        $(".zzc_kaijiang").hide();
    })
})