// ==UserScript==
// @name         FacebookKiller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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
        //document.getElementById('expanding_cta_close_button').click();
        document.getElementsByClassName('_4-u2 _5hni _4-u8')[0].style.display = 'none';
        document.getElementsByClassName('_5hn6')[0].style.display = 'none';
        document.getElementsByClassName('_4-u2 _5hnd _4-u8')[0].style.display = 'none';
    }, 2000);
})();