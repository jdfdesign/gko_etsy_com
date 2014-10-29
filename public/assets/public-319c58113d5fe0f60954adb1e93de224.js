/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(t,e,o){if(arguments.length>1&&"[object Object]"!==String(e)){if(o=jQuery.extend({},o),(null===e||void 0===e)&&(o.expires=-1),"number"==typeof o.expires){var n=o.expires,i=o.expires=new Date;i.setDate(i.getDate()+n)}return e=String(e),document.cookie=[encodeURIComponent(t),"=",o.raw?e:encodeURIComponent(e),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=e||{};var s,a=o.raw?function(t){return t}:decodeURIComponent;return(s=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie))?a(s[1]):null},/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,o,n,i){return jQuery.easing[jQuery.easing.def](t,e,o,n,i)},easeInQuad:function(t,e,o,n,i){return n*(e/=i)*e+o},easeOutQuad:function(t,e,o,n,i){return-n*(e/=i)*(e-2)+o},easeInOutQuad:function(t,e,o,n,i){return(e/=i/2)<1?n/2*e*e+o:-n/2*(--e*(e-2)-1)+o},easeInCubic:function(t,e,o,n,i){return n*(e/=i)*e*e+o},easeOutCubic:function(t,e,o,n,i){return n*((e=e/i-1)*e*e+1)+o},easeInOutCubic:function(t,e,o,n,i){return(e/=i/2)<1?n/2*e*e*e+o:n/2*((e-=2)*e*e+2)+o},easeInQuart:function(t,e,o,n,i){return n*(e/=i)*e*e*e+o},easeOutQuart:function(t,e,o,n,i){return-n*((e=e/i-1)*e*e*e-1)+o},easeInOutQuart:function(t,e,o,n,i){return(e/=i/2)<1?n/2*e*e*e*e+o:-n/2*((e-=2)*e*e*e-2)+o},easeInQuint:function(t,e,o,n,i){return n*(e/=i)*e*e*e*e+o},easeOutQuint:function(t,e,o,n,i){return n*((e=e/i-1)*e*e*e*e+1)+o},easeInOutQuint:function(t,e,o,n,i){return(e/=i/2)<1?n/2*e*e*e*e*e+o:n/2*((e-=2)*e*e*e*e+2)+o},easeInSine:function(t,e,o,n,i){return-n*Math.cos(e/i*(Math.PI/2))+n+o},easeOutSine:function(t,e,o,n,i){return n*Math.sin(e/i*(Math.PI/2))+o},easeInOutSine:function(t,e,o,n,i){return-n/2*(Math.cos(Math.PI*e/i)-1)+o},easeInExpo:function(t,e,o,n,i){return 0==e?o:n*Math.pow(2,10*(e/i-1))+o},easeOutExpo:function(t,e,o,n,i){return e==i?o+n:n*(-Math.pow(2,-10*e/i)+1)+o},easeInOutExpo:function(t,e,o,n,i){return 0==e?o:e==i?o+n:(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+o:n/2*(-Math.pow(2,-10*--e)+2)+o},easeInCirc:function(t,e,o,n,i){return-n*(Math.sqrt(1-(e/=i)*e)-1)+o},easeOutCirc:function(t,e,o,n,i){return n*Math.sqrt(1-(e=e/i-1)*e)+o},easeInOutCirc:function(t,e,o,n,i){return(e/=i/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+o:n/2*(Math.sqrt(1-(e-=2)*e)+1)+o},easeInElastic:function(t,e,o,n,i){var s=1.70158,a=0,r=n;if(0==e)return o;if(1==(e/=i))return o+n;if(a||(a=.3*i),r<Math.abs(n)){r=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/r);return-(r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*i-s)*Math.PI/a))+o},easeOutElastic:function(t,e,o,n,i){var s=1.70158,a=0,r=n;if(0==e)return o;if(1==(e/=i))return o+n;if(a||(a=.3*i),r<Math.abs(n)){r=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*e)*Math.sin(2*(e*i-s)*Math.PI/a)+n+o},easeInOutElastic:function(t,e,o,n,i){var s=1.70158,a=0,r=n;if(0==e)return o;if(2==(e/=i/2))return o+n;if(a||(a=.3*i*1.5),r<Math.abs(n)){r=n;var s=a/4}else var s=a/(2*Math.PI)*Math.asin(n/r);return 1>e?-.5*r*Math.pow(2,10*(e-=1))*Math.sin(2*(e*i-s)*Math.PI/a)+o:r*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*i-s)*Math.PI/a)*.5+n+o},easeInBack:function(t,e,o,n,i,s){return void 0==s&&(s=1.70158),n*(e/=i)*e*((s+1)*e-s)+o},easeOutBack:function(t,e,o,n,i,s){return void 0==s&&(s=1.70158),n*((e=e/i-1)*e*((s+1)*e+s)+1)+o},easeInOutBack:function(t,e,o,n,i,s){return void 0==s&&(s=1.70158),(e/=i/2)<1?n/2*e*e*(((s*=1.525)+1)*e-s)+o:n/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+o},easeInBounce:function(t,e,o,n,i){return n-jQuery.easing.easeOutBounce(t,i-e,0,n,i)+o},easeOutBounce:function(t,e,o,n,i){return(e/=i)<1/2.75?7.5625*n*e*e+o:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+o:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+o:n*(7.5625*(e-=2.625/2.75)*e+.984375)+o},easeInOutBounce:function(t,e,o,n,i){return i/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,i)+o:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,n,i)+.5*n+o}}),/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,o){var n={init:function(e,o){var n=this;n.$elem=t(o),n.options=t.extend({},t.fn.owlCarousel.options,n.$elem.data(),e),n.userOptions=e,n.loadContent()},loadContent:function(){function e(t){var e,o="";if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(o+=t.owl[e].item);n.$elem.html(o)}n.logIn()}var o,n=this;"function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath?(o=n.options.jsonPath,t.getJSON(o,e)):n.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),t.onStartup(),void 0)},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500),void 0)},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,o,n=this;if(n.options.responsive===!1)return!1;if(n.options.singleItem===!0)return n.options.items=n.orignalItems=1,n.options.itemsCustom=!1,n.options.itemsDesktop=!1,n.options.itemsDesktopSmall=!1,n.options.itemsTablet=!1,n.options.itemsTabletSmall=!1,n.options.itemsMobile=!1,!1;if(e=t(n.options.responsiveBaseWidth).width(),e>(n.options.itemsDesktop[0]||n.orignalItems)&&(n.options.items=n.orignalItems),n.options.itemsCustom!==!1)for(n.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),o=0;o<n.options.itemsCustom.length;o+=1)n.options.itemsCustom[o][0]<=e&&(n.options.items=n.options.itemsCustom[o][1]);else e<=n.options.itemsDesktop[0]&&n.options.itemsDesktop!==!1&&(n.options.items=n.options.itemsDesktop[1]),e<=n.options.itemsDesktopSmall[0]&&n.options.itemsDesktopSmall!==!1&&(n.options.items=n.options.itemsDesktopSmall[1]),e<=n.options.itemsTablet[0]&&n.options.itemsTablet!==!1&&(n.options.items=n.options.itemsTablet[1]),e<=n.options.itemsTabletSmall[0]&&n.options.itemsTabletSmall!==!1&&(n.options.items=n.options.itemsTabletSmall[1]),e<=n.options.itemsMobile[0]&&n.options.itemsMobile!==!1&&(n.options.items=n.options.itemsMobile[1]);n.options.items>n.itemsAmount&&n.options.itemsScaleUp===!0&&(n.options.items=n.itemsAmount)},response:function(){var o,n,i=this;return i.options.responsive!==!0?!1:(n=t(e).width(),i.resizer=function(){t(e).width()!==n&&(i.options.autoPlay!==!1&&e.clearInterval(i.autoPlayInterval),e.clearTimeout(o),o=e.setTimeout(function(){n=t(e).width(),i.updateVars()},i.options.responsiveRefreshRate))},t(e).resize(i.resizer),void 0)},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,o=0,n=e.itemsAmount-e.options.items;e.$owlItems.each(function(i){var s=t(this);s.css({width:e.itemWidth}).data("owl-item",Number(i)),(i%e.options.items===0||i===n)&&(i>n||(o+=1)),s.data("owl-roundPages",o)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,o,n,i=this,s=0,a=0;for(i.positionsInArray=[0],i.pagesInArray=[],e=0;e<i.itemsAmount;e+=1)a+=i.itemWidth,i.positionsInArray.push(-a),i.options.scrollPerPage===!0&&(o=t(i.$owlItems[e]),n=o.data("owl-roundPages"),n!==s&&(i.pagesInArray[s]=i.positionsInArray[e],s=n))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,o=t('<div class="owl-buttons"/>');e.owlControls.append(o),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),o.append(e.buttonPrev).append(e.buttonNext),o.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),o.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(o){o.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(o){o.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,o,n,i,s,a,r=this;if(r.options.pagination===!1)return!1;for(r.paginationWrapper.html(""),e=0,o=r.itemsAmount-r.itemsAmount%r.options.items,i=0;i<r.itemsAmount;i+=1)i%r.options.items===0&&(e+=1,o===i&&(n=r.itemsAmount-r.options.items),s=t("<div/>",{"class":"owl-page"}),a=t("<span></span>",{text:r.options.paginationNumbers===!0?e:"","class":r.options.paginationNumbers===!0?"owl-numbers":""}),s.append(a),s.data("owl-page",o===i?n:i),s.data("owl-roundPages",e),r.paginationWrapper.append(s));r.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:(e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))}),void 0)},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))),void 0)},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,o,n){var i,s=this;return s.isTransition?!1:("function"==typeof s.options.beforeMove&&s.options.beforeMove.apply(this,[s.$elem]),t>=s.maximumItem?t=s.maximumItem:0>=t&&(t=0),s.currentItem=s.owl.currentItem=t,s.options.transitionStyle!==!1&&"drag"!==n&&1===s.options.items&&s.browser.support3d===!0?(s.swapSpeed(0),s.browser.support3d===!0?s.transition3d(s.positionsInArray[t]):s.css2slide(s.positionsInArray[t],1),s.afterGo(),s.singleItemTransition(),!1):(i=s.positionsInArray[t],s.browser.support3d===!0?(s.isCss3Finish=!1,o===!0?(s.swapSpeed("paginationSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.paginationSpeed)):"rewind"===o?(s.swapSpeed(s.options.rewindSpeed),e.setTimeout(function(){s.isCss3Finish=!0},s.options.rewindSpeed)):(s.swapSpeed("slideSpeed"),e.setTimeout(function(){s.isCss3Finish=!0},s.options.slideSpeed)),s.transition3d(i)):o===!0?s.css2slide(i,s.options.paginationSpeed):"rewind"===o?s.css2slide(i,s.options.rewindSpeed):s.css2slide(i,s.options.slideSpeed),s.afterGo(),void 0))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay),void 0)},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t,n,i,s,a=this,r="translate3d(0px, 0px, 0px)",l=o.createElement("div");l.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r,t=/translate3d\(0px, 0px, 0px\)/g,n=l.style.cssText.match(t),i=null!==n&&1===n.length,s="ontouchstart"in e||e.navigator.msMaxTouchPoints,a.browser={support3d:i,isTouch:s}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function n(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function i(e){"on"===e?(t(o).on(l.ev_types.move,a),t(o).on(l.ev_types.end,r)):"off"===e&&(t(o).off(l.ev_types.move),t(o).off(l.ev_types.end))}function s(o){var s,a=o.originalEvent||o||e.event;if(3===a.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),s=t(this).position(),u.relativePos=s.left,u.offsetX=n(a).x-s.left,u.offsetY=n(a).y-s.top,i("on"),u.sliding=!1,u.targetElement=a.target||a.srcElement}}function a(i){var s,a,r=i.originalEvent||i||e.event;l.newPosX=n(r).x-u.offsetX,l.newPosY=n(r).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&u.dragging!==!0&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==r.preventDefault?r.preventDefault():r.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&u.sliding===!1&&t(o).off("touchmove.owl"),s=function(){return l.newRelativeX/5},a=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,s()),a()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function r(o){var n,s,a,r=o.originalEvent||o||e.event;r.target=r.target||r.srcElement,u.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(n=l.getNewPosition(),l.goTo(n,!1,"drag"),u.targetElement===r.target&&l.browser.isTouch!==!0&&(t(r.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),s=t._data(r.target,"events").click,a=s.pop(),s.splice(0,0,a))),i("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",s)},getNewPosition:function(){var t=this,e=t.closestItem();return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,o=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,n=e.newPosX,i=null;return t.each(o,function(s,a){n-e.itemWidth/20>o[s+1]&&n-e.itemWidth/20<a&&"left"===e.moveDirection()?(i=a,e.currentItem=e.options.scrollPerPage===!0?t.inArray(i,e.positionsInArray):s):n+e.itemWidth/20<a&&n+e.itemWidth/20>(o[s+1]||o[s]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(i=o[s+1]||o[o.length-1],e.currentItem=t.inArray(i,e.positionsInArray)):(i=o[s+1],e.currentItem=s+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,o){t.options.autoPlay=o,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,o){t.goTo(o)}),t.$elem.on("owl.jumpTo",function(e,o){t.jumpTo(o)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,o,n,i,s,a=this;if(a.options.lazyLoad===!1)return!1;for(e=0;e<a.itemsAmount;e+=1)o=t(a.$owlItems[e]),"loaded"!==o.data("owl-loaded")&&(n=o.data("owl-item"),i=o.find(".lazyOwl"),"string"==typeof i.data("src")?(void 0===o.data("owl-loaded")&&(i.hide(),o.addClass("loading").data("owl-loaded","checked")),s=a.options.lazyFollow===!0?n>=a.currentItem:!0,s&&n<a.currentItem+a.options.items&&i.length&&i.each(function(){a.lazyPreload(o,t(this))})):o.data("owl-loaded","loaded"))},lazyPreload:function(t,o){function n(){t.data("owl-loaded","loaded").removeClass("loading"),o.removeAttr("data-src"),"fade"===a.options.lazyEffect?o.fadeIn(400):o.show(),"function"==typeof a.options.afterLazyLoad&&a.options.afterLazyLoad.apply(this,[a.$elem])}function i(){r+=1,a.completeImg(o.get(0))||s===!0?n():100>=r?e.setTimeout(i,100):n()}var s,a=this,r=0;"DIV"===o.prop("tagName")?(o.css("background-image","url("+o.data("src")+")"),s=!0):o[0].src=o.data("src"),i()},autoHeight:function(){function o(){var o=t(s.$owlItems[s.currentItem]).height();s.wrapperOuter.css("height",o+"px"),s.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){s.wrapperOuter.addClass("autoHeight")},0)}function n(){i+=1,s.completeImg(a.get(0))?o():100>=i?e.setTimeout(n,100):s.wrapperOuter.css("height","")}var i,s=this,a=t(s.$owlItems[s.currentItem]).find("img");void 0!==a.get(0)?(i=0,n()):o()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,o=this;for(o.options.addClassActive===!0&&o.$owlItems.removeClass("active"),o.visibleItems=[],e=o.currentItem;e<o.currentItem+o.options.items;e+=1)o.visibleItems.push(e),o.options.addClassActive===!0&&t(o.$owlItems[e]).addClass("active");o.owl.visibleItems=o.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,o=e.outClass,n=e.inClass,i=e.$owlItems.eq(e.currentItem),s=e.$owlItems.eq(e.prevItem),a=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],r=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":r+"px","-moz-perspective-origin":r+"px","perspective-origin":r+"px"}),s.css(t(a,10)).addClass(o).on(l,function(){e.endPrev=!0,s.off(l),e.clearTransStyle(s,o)}),i.addClass(n).on(l,function(){e.endCurrent=!0,i.off(l),e.clearTransStyle(i,n)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var n=this;n.$elem.off(".owl owl mousedown.disableTextSelect"),t(o).off(".owl owl"),t(e).off("resize",n.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr({style:t.$elem.data("owl-originalStyles")||"","class":t.$elem.data("owl-originalClasses")})},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var o=this,n=t.extend({},o.userOptions,e);o.unWrap(),o.init(n,o.$elem)},addItem:function(t,e){var o,n=this;return t?0===n.$elem.children().length?(n.$elem.append(t),n.setVars(),!1):(n.unWrap(),o=void 0===e||-1===e?-1:e,o>=n.$userItems.length||-1===o?n.$userItems.eq(-1).after(t):n.$userItems.eq(o).before(t),n.setVars(),void 0):!1},removeItem:function(t){var e,o=this;return 0===o.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),o.setVars(),void 0)}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var o=Object.create(n);o.init(e,this),t.data(this,"owlCarousel",o)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),function(t){t(document).ready(function(){function e(){return l?l:(console.log("no guest_id"),t.ajax({url:a+"/guests/generator.js?api_key="+s,dataType:"jsonp",success:function(e){e.ok?(console.log(e.results[0].guest_id),l=e.results[0].guest_id,t.cookie("guest_id",e.results[0].guest_id,{expires:r}),p=e.results[0].checkout_url,t.cookie("checkout_url",e.results[0].checkout_url,{expires:r})):alert(e.error)}}),void 0)}function o(){url=a+"/shops/tresorsdestbarth/sections.js?language=fr&api_key="+s,t.ajax({url:url,dataType:"jsonp",success:function(e){e.ok?(console.log(e),t("#etsy-sections").empty(),e.count>0?t.each(e.results,function(e,o){t("<li><a class='shop_section' href='"+o.shop_section_id+"'>"+o.title+"<span class='pull-right'>("+o.active_listing_count+")</span></a></li>").appendTo("#etsy-sections")}):t("<p>No results.</p>").appendTo("#etsy-sections")):(t("#etsy-sections").empty(),alert(e.error)),t("a.shop_section").on("click",function(e){e.preventDefault(),console.log(t(this).attr("href"))})}})}function n(){console.log("getListing"),url=a+"/shops/tresorsdestbarth/listings/active.js?language=fr&fields=listing_id,title,price,description,quantity,url,currency_code,shop_section_id&includes=Images,MainImage&api_key="+s,t("#etsy-images").empty(),t.ajax({url:url,dataType:"jsonp",success:function(e){e.ok?(u=e.results,t.cookie("listing",e.results,{expires:r}),t("#etsy-images").empty(),e.count>0?t.each(e.results,function(e,o){console.log(o),t("<div class='col-md-6'><a class='thumbnail' href='"+o.url+"' data-listing-id='"+o.listing_id+"' data-shop-section-id='"+o.shop_section_id+"'><div class='background-image-holder'><img src='"+o.MainImage.url_570xN+"'/></div><div class='caption-wrapper'><div class='caption'><h3>"+o.title+"</h3><p>&rarr;</p><p class='th-price'>"+o.currency_code+" "+o.price+"</p></div></div></a></div>").appendTo("#etsy-images")}):t("<p>No results.</p>").appendTo("#etsy-images")):(t("#etsy-images").empty(),alert(e.error)),t(".background-image-holder").each(function(){var e=t(this).children("img").attr("src");t(this).css("background",'url("'+e+'")'),t(this).children("img").hide(),t(this).css("background-position","50% 0%")}),t("a.thumbnail").on("click",function(e){e.preventDefault();var o,n,s=t(this).data("listing-id");console.log(s);for(var a=0;a<u.length;a++)if(n=u[a],n.listing_id==s){o=n;break}i(o)})}})}function i(e){t("#product-title").html(e.title),t("#product-link").attr("href",e.url),t("#product-listing-id").html(e.listing_id),t("#product-currency-code").html(e.currency_code),t("#product-price").html(e.price),t("#product-description").html(e.description);var o=t("#product-images"),n="";"undefined"==typeof o.data("owlCarousel")?o.empty():o.data("owlCarousel").destroy(),t.each(e.Images,function(t,e){n+="<img src='"+e.url_fullxfull+"'/>"}),o.html(n),o.owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,autoHeight:!0,singleItem:!0}),t("body, html").animate({scrollTop:t(".navbar-header").height()},1500,"easeOutExpo")}var s="y4g5v9q3ejafxl71fhrjc1o2",a="https://openapi.etsy.com/v2",r=new Date,l=t.cookie("guest_id"),u=t.cookie("listing"),p=t.cookie("checkout_url");r.setTime(r.getTime()+3e5),n(),o(),e()})}(jQuery);