function trackloop() {
    $("#divTrack1").css("right", "0");
    $("#divTrack2").css("right", "0");
    $("#divTrack1").animate({
        right: "-10000px",
    }, 16000, 'linear', function () {
        $("#divTrack1").css({
            "right": "890px"
        });
    });
}

function carrun(result) {
    var fakeresult = [3, 4, 5, 6, 8, 7, 10, 9, 1, 2];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 100 - (index * 10)
        }, 2500);
    });
    var fakeresult = [2, 9, 3, 1, 4, 7, 6, 8, 10, 5];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 120 - (index * 10)
        }, 2500);
    });
    var fakeresult = [2, 1, 9, 10, 8, 7, 6, 5, 4, 3];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 140 - (index * 10)
        }, 2500);
    });
    var fakeresult = [2, 9, 3, 1, 4, 7, 6, 8, 10, 5];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 180 - (index * 10)
        }, 2500);
    });
    var fakeresult = [4, 7, 6, 8, 10, 5, 2, 9, 3, 1];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 200 - (index * 10)
        }, 2500);
    });
    var fakeresult = [2, 9, 3, 1, 4, 7, 6, 8, 10, 5];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 220 - (index * 10)
        }, 2500);
    });
    var fakeresult = [1, 4, 5, 8, 6, 10, 9, 7, 3, 2];
    $.each(fakeresult, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 240 - (index * 10)
        }, 1500);
    });

    $.each(result, function (index, r) {
        $("#divGameCar" + r).find("div").animate({
            right: 340 - (index * 10)
        }, 2000);
    });

}
window.boardShow = function () {
    $.each(window.showNumbers, function (i, n) {
        setTimeout(function () {
            $("#divR" + (i * 1 + 1)).find("div").animate({
                dispaly: "block",
                left: (i * 1 + 1) % 2 === 1 ? 100 : 304,
                top: 35 + Math.ceil((i * 1 + 1) / 2 - 1) * 51
            }, 1000);
            $('.pk_kai_bot').find('li').eq(i).show();
        }, 1000 + 100 * i);

    });
};
window.raceAresult = function (result) {
    window.audio = document.getElementById('raceing_audio');
    audio.currentTime = 0;
    audio.play();
    setTimeout(function () {
        trackloop();
        carrun(result);
    }, 500);
    setTimeout(function () {
        $.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (i, n) {
            $("#divGameCar" + n).find('div').css({
                'right': '0'
            });
        });
        $("#divTrack1").css({
            "right": "890px"
        });
    }, 21000);
};