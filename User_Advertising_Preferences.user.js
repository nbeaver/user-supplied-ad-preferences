// ==UserScript==
// @name        User Advertising Preferences
// @namespace   http://userscripts.org
// @description Tell websites what advertisements you want.
// @include     http://*
// @include     https://*
// @include     file://*
// @exclude     chrome://*
// @version     0.1
// @grant       none
// @run-at document-start
// ==/UserScript==

navigator.userAdPrefs =
{
    "yes" : [
        "Mad Men",
        "Burma-Shave",
        "Murder Must Advertise",
        "Confessions of an Advertising Man",
        "How to Sell Anything to Anybody",
        "The Man Who Sold America",
        "Mary Wells Lawrence",
        "Jean Wade Rindlaub",
        "Powdermilk Biscuits",
    ],
    "no" : [
        "Then We Came to the End",
        "The Hidden Persuaders",
        "Marlboro Man",
    ],
}
