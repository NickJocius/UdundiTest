"use strict";

//
//File: animations.js
//Author: Nick Jocius
//Description: Custom javascript animations for Udundi Test Project
//

window.addEventListener('load', Explore);

function Explore() {
    
    const explore = document.getElementById('Explore');

    let slideIn = [
        {opacity: '0%'},
        { left: '-1000px' },
        { left: '-500px' },
        { left: '-250px' },
        {opacity: '50%'},
        { left: '0px' },
        { left: '50px' },
        { opacity: '100%' },
        {left: '150px'}
    ]

    let slideTiming = {
        fill: 'forwards',
        duration: 2000
    }

    explore.animate(slideIn, slideTiming);
}