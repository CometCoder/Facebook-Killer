// ==UserScript==
// @name         FacebookKiller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Facebook Sign in/Sign up popup killer
// @author       CometCoder
// @match http://*.facebook.com/*
// @match https://*.facebook.com/*
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// @run-at document-end
// @connect *
// ==/UserScript==

(function() {
    'use strict';
    window.setInterval(function() {
        document.getElementsByClassName('_4-u2 _5hni _4-u8')[0].style.display = 'none';
        document.getElementsByClassName('_5hn6')[0].style.display = 'none';
        document.getElementsByClassName('_4-u2 _5hnd _4-u8')[0].style.display = 'none';
        $('generic_dialog pop_dialog generic_dialog_modal').remove();
    }, 2000);
})();
