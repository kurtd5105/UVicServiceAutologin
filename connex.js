// ==UserScript==
// @name Connex Autologin
// @author Kurt D
// @grant none
// @include https://www.csc.uvic.ca/cas/login?service=https%3A%2F%2Fconnex.csc.uvic.ca%2Fsakai-login-tool%2Fcontainer
// @include https://www.csc.uvic.ca/cas/login*
// ==/UserScript==

var pwString = "";
// Can encrypt pw and put some code to decrypt here

document.forms[0].username.value = "";
document.forms[0].password.value = pwString;

document.forms["fm1"].submit.click();