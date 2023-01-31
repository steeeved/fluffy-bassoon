// ==UserScript==
// @name         Invaders
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.1.1/index.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let authed = ['Steved','Galaxy-A10s','android-7bd9b127ccf9d49f','TV','DESKTOP-1SE40GF','TL-WR840N']

    setInterval(() => {
        const Element = document.querySelector('tbody');
        const okBtn = document.getElementById('submit');
        const myArray = Element.querySelectorAll('.deviceName');
        let pests = [];

        myArray.forEach(function(item) {
            const text = item.innerText;
            if (!authed.includes(text)) {
                pests.push(item);
            }
        });

        for (let i=0; i<pests.length; i++) {
            const pestParent = pests[i].parentNode.parentNode;
            let switchBtn = pestParent.querySelector('.switch');
            switchBtn.classList.remove("icon-toggle-on")
            switchBtn.classList.add("icon-toggle-off")
        }

        if (pests.length > 0) {
            okBtn.click()
        }
    }, 10000);
})();
