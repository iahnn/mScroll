/**
 * JavaScript Momentum Scroll
 * This will transform the native scroll of the browser into a very smooth scroll with momentum effect
 * https://github.com/iahnn/mScroll/
 * licensed under MIT
 * version 1.0
 */
(function() {

    "use strict";

    var win = window
            , doc = document
            , target = doc.getElementsByTagName('body')[0]
            , wrapper = target.childNodes
            , childTag = 'DIV'
            , easing = "ease-out" //css easing
            , duration = "1.2s" //duration ms(millisecond) or s(second)
            , top = 0
            , wrappers = [];

    for(var i=0; i<wrapper.length; i++) {
        if(wrapper[i].tagName == childTag) {
            wrappers.push(wrapper[i]);
        }
    }

    var mScroll = {
                _init: function() {
                    if( wrappers.length == 1 ) {
                        target.style.height = wrappers[0].offsetHeight + 'px';

                        wrappers[0].style.transition = 'transform ' + duration + ' ' + easing;
                        wrappers[0].style.position = 'fixed';
                        wrappers[0].style.top = '0';
                        wrappers[0].style.left = '0';
                        wrappers[0].style.width = '100%';
                        wrappers[0].style.padding = '0';
                        wrappers[0].style.zIndex = '2';
                        wrappers[0].style.display = 'block';
                        wrappers[0].style.backfaceVisibility = 'hidden';
                    }
                },
                _scroll: function() {
                    top = -(win.pageYOffset || doc.body.scrollTop);
                    wrappers[0].style.transform = 'translateY(' + top + 'px)';
                }
            };

    if (typeof window.ontouchstart == 'undefined') {
        win.onload = function() {
            mScroll._init();
        };
        win.onscroll = function() {
            mScroll._scroll();
        };
        win.onresize = function() {
            target.style.height = wrappers[0].offsetHeight + 'px';
        };
    }
})();
