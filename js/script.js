console.log("%c Made by :)%c Priya Tyagi ","color:#212121;line-height:40px;padding:10px;font-weight:bold;border","background: #212121;color:#fff;line-height:40px;padding:10px;font-weight:bold"),console.log("%c Pokémon %c Gotta Catch ém all!","background:#efc800;padding:10px;border:2px solid #efc800;color: #495fa6;line-height: 70px;font-size:14px;font-weight:bold;","font-style:italic;background: #495fa6; color: #efc800; border: 2px solid  #efc800; line-height: 70px; padding:10px;font-size: 14px; font-weight: bold");var waitTime=600,errorBlock="<div class='error-msg'><span>Currently unavailable on mobile :(</span></div>",video_ele=$(".bg-video"),slider_item=$(".js-slider-item");function stopVideo(e){var t;t="first"==e?video_ele.first():"last"==e?video_ele.last():$("#"+e),setTimeout(function(){t.addClass("is-current"),t.get(0).play()},waitTime)}function loadBgVideo(e){video_ele.each(function(){$(this).get(0).pause(),$(this).get(0).currentTime=0}),video_ele.removeClass("is-current"),stopVideo("first"==e?"first":"last"==e?"last":e)}function cardSlider(){var f,v,g,p,h,w,y,_,b,e=$(".slider-list"),t=$("#main-wrapper"),x=$("#js-window"),I=x.width(),j=$("#js-draggable-area"),C=$("#js-dragger"),i=$("#js-dragger"),B=j.width(),S=i.width(),a=50-parseInt(S/2/B*100),T=slider_item.length,s=slider_item.outerWidth(),E=(slider_item.first().offset().left,T*s),k=$(".bg-video-wrapper"),M=0,o=!0;e.width(E),f=e.width()-I,C.css({left:a+"%"}),b=parseInt(C.css("left"))+S/2,$(window).on("load",function(){function i(e){x.unbind("scroll"),p=e.next(),w=p.index(),M<T-1?(k.fadeOut(),w<0?(w=T-1,loadBgVideo("last")):(x.animate({scrollLeft:s*w},waitTime),e.removeClass("current"),p.addClass("current"),e=$(".js-slider-item.current"),M=e.index(),w=p.index(),slider_item.removeClass("active-card"),e.addClass("active-card"),loadBgVideo(e.attr("data-char")),setTimeout(function(){k.fadeIn()},300))):(w=T-1,k.show(),loadBgVideo("last")),o=!1,setTimeout(function(){o=!0},2e3)}function d(e){x.unbind("scroll"),e=$(".js-slider-item.current"),g=e.prev(),h=g.index(),0!=M?(k.fadeOut(),x.animate({scrollLeft:s*h},waitTime),e.removeClass("current"),g.addClass("current"),e=$(".js-slider-item.current"),g=e.prev(),M=e.index(),h=g.index(),slider_item.removeClass("active-card"),e.addClass("active-card"),loadBgVideo(e.attr("data-char")),setTimeout(function(){k.fadeIn()},300)):(h=0,loadBgVideo("first")),o=!1,setTimeout(function(){o=!0},2e3)}var r;t.on("mousedown",function(e){var t,i,d,r,a,s,o=$(e.target).attr("id"),n=j.offset().left,l=(j.position().top,e.pageX-C.offset().left),c=E-I,m=B-S,u=(slider_item.last().scrollLeft(),c/m);"js-dragger"==o&&(C.addClass("glow"),$(this).bind("mousemove",function(e){$(".slider-list").addClass("scale-view"),slider_item.removeClass("active-card"),k.fadeOut(),C.offset({left:e.pageX-l}),d=C.offset().left,r=parseInt(C.css("left")),a=0!=(i=r+S/2-b)?parseInt(5e5/Math.abs(i)):parseInt(5e5),x.animate().stop(),0<=i?(s=f,x.bind("scroll",function(){v=$(".js-slider-item.current"),p=v.next(),(w=M+1)<T&&(y=Math.abs(v.offset().left),Math.abs(p.offset().left)<y&&(v.removeClass("current"),p.addClass("current"),v=$(".js-slider-item.current"),p=v.next(),M=v.index()))})):(s=0,x.bind("scroll",function(){v=$(".js-slider-item.current"),0!=(M=v.index())?(g=v.prev(),y=Math.abs(v.offset().left),_=Math.abs(g.offset().left),h=g.index(),_<y&&(v.removeClass("current"),g.addClass("current"),v=$(".js-slider-item.current"),g=v.prev(),M=v.index())):(h=0,loadBgVideo("first"))})),x.animate({scrollLeft:s},a),d<n?(C.css({left:"0px"}),r=parseInt(C.css("left")),t=parseInt(u*r)):n+B-S<=d&&(C.css({left:B-S+"px"}),r=parseInt(C.css("left")),parseInt(r/B*100),t=parseInt(u*r),x.scrollLeft(t))}))}),t.on("mouseup",function(e){var t=$(e.target).attr("id");$(".slider-list").removeClass("scale-view"),x.animate().stop(!0),$(this).unbind("mousemove"),C.css({left:a+"%"}),C.removeClass("glow"),x.animate({scrollLeft:s*M}),(v=$(".js-slider-item.current")).addClass("active-card"),"js-dragger"==t&&loadBgVideo(v.attr("data-char")),setTimeout(function(){k.fadeIn()},300)}),$(".slider-nav #move-right").on("click",function(){i(v=$(".js-slider-item.current"))}),$(".slider-nav #move-left").on("click",function(){d(v=$(".js-slider-item.current"))}),$(window).on("keydown",function(e){var t=e.which;e.preventDefault(),clearTimeout(r),1==o&&(r=setTimeout(function(){39==t?i(v=$("#js-slider-section .js-slider-item.current")):37==t&&d(v=$("#js-slider-section .js-slider-item.current"))}))}),$(window).on("mousewheel DOMMouseScroll wheel",function(e){clearTimeout(r),1==o&&(r=setTimeout(function(){e.originalEvent.detail<0||0<e.originalEvent.wheelDelta?d(v=$("#js-slider-section .js-slider-item.current")):i(v=$("#js-slider-section .js-slider-item.current"))}))})})}function pokeSlider(){window.matchMedia("(min-width: 992px)").matches?(cardSlider(),$(".error-msg").remove()):($(".error-msg").remove(),$("#js-slider-section").prepend(errorBlock))}cardSlider(),(window.onresize=pokeSlider)();var vid1=document.getElementById("pika_video"),vid2=document.getElementById("mew_video"),vid3=document.getElementById("lap_video"),vid4=document.getElementById("lug_video"),vid5=document.getElementById("char_video"),vid6=document.getElementById("tog_video"),vid8=document.getElementById("dragonite_video"),vid7=document.getElementById("ho_oh_video"),vid9=document.getElementById("umb_video"),vid10=document.getElementById("chiko_video"),vid11=document.getElementById("mime_video"),vid12=document.getElementById("rapi_video"),vid13=document.getElementById("gast_video"),vid14=document.getElementById("cater_video");$(document).ready(function(){if(window.matchMedia("(min-width: 992px)").matches)var e=setInterval(function(){4===vid1.readyState&&4===vid2.readyState&&4===vid3.readyState&&4===vid4.readyState&&4===vid5.readyState&&4===vid6.readyState&&4===vid7.readyState&&4===vid8.readyState&&4===vid9.readyState&&4===vid10.readyState&&4===vid11.readyState&&4===vid12.readyState&&4===vid13.readyState&&4===vid14.readyState&&(setTimeout(function(){$(".pokeball--loading").removeClass("loading")},1e3),setTimeout(function(){$(".loading-screen").addClass("unviel")},1600),setTimeout(function(){$(".loading-screen").remove(),slider_item.first().addClass("current active-card"),video_ele.first().addClass("is-current"),video_ele.first().get(0).play()},2e3),clearInterval(e))},100)});