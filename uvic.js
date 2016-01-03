// ==UserScript==
// @name Uvic Autologin
// @author Kurt D
// @grant none
// @include http://coursespaces.uvic.ca/login/index.php
// @include https://www.uvic.ca/cas/login?service=http%3A%2F%2Fcoursespaces.uvic.ca%2Flogin%2Findex.php
// @include https://www.uvic.ca/cas/login?service=http%3A%2F%2Fcoursespaces.uvic.ca
// @include https://www.uvic.ca/cas/login?service=https%3A%2F%2Fwww.uvic.ca
// @include https://www.uvic.ca/cas/login?service=https%3A%2F%2Fwm3.uvic.ca%2Fsrc%2FCASlogin.php
// @include https://www.uvic.ca/cas/login*
// ==/UserScript==

document.credentials.username.autocomplete = "on";
document.credentials.password.autocomplete = "on";
var pwString = "";
// Can encrypt pw and put some code to decrypt here

document.credentials.username.value = "";
document.credentials.password.value = pwString;

document.createElement('form').submit.call(document.credentials);