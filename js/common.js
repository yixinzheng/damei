/**
 * Created by Administrator on 2018/6/8.
 */
/**
 * Created by Administrator on 2018/3/16.
 */
var common={
    anim: function(){
        var winHeight = $(window).height();
        var winSroTop=0;
        function anite(){
            $(".ani-up").each(function(){
                if(winHeight+winSroTop>$(this).offset().top){
                    $(this).addClass("fadeInUp");
                }
            })
        }
        anite();
        $(window).scroll(function(){
            winSroTop = $(this).scrollTop();
            anite();
        });
        var browser=navigator.appName;
        if(browser != "Netscape"){
            var b_version=navigator.appVersion;
            var version=b_version.split(";");
            var trim_Version=version[1].replace(/[ ]/g,"");
            if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") {
                $(".ani-up").css("opacity",1);
            }
        }
    }
}
$(function(){
    common.anim();
})