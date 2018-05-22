// ==UserScript==
// @name         FacebookKiller
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Facebook Sign in/Sign up popup killer
// @author       CometCoder
// @match http://*.facebook.com/*
// @match https://*.facebook.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
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
    window.addEventListener('load', function() {
        document.getElementsByClassName('timelineLoggedOutSignUpDesktopCtaNewDesignCoverResize')[0].remove()
        document.getElementsByClassName('generic_dialog')[0].remove()
    }, false);
})();
