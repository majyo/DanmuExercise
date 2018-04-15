var setDunmuStatus = function (danmu) {
    var blackboard = $(".blackboard");
    var top = (blackboard.height() - danmu.height()) * Math.random();
    var left = blackboard.width() - danmu.width();
    danmu.css({
        left: left,
        top: top
    });
    var time = 5000 + 5000 * Math.random();
    danmu.animate({
        left: -left
    }, time, "swing", function () {
        danmu.remove();
    });
};

var runDanmu = function (nowText) {
    var danmuDiv = $("<div class=\'danmuMessage\'></div>");
    danmuDiv.text(nowText);
    $(".blackboard").append(danmuDiv);
    setDunmuStatus(danmuDiv);
};

$(document).ready(function () {
    var danmuAry = [];

    //响应点击事件
    $(".send").click(function () {
        var inputText = $(".inputText");
        var danmuText = inputText.val();
        danmuAry.push(danmuText);
        inputText.val("");
        runDanmu(danmuText);
    });

    //响应回车键
    $(".inputText").keypress(function (event) {
        if (event.keyCode === 13) {
            $(".send").trigger("click");
        }
    });

    //响应清空事件
    $(".clear").click(function () {
        danmuAry = [];
    });
});
