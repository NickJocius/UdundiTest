"use strict";

//
//File: animations.js
//Author: Nick Jocius
//Description: Custom javascript animations for Udundi Test Project
//

window.addEventListener('load', Explore);
const explore = document.getElementById('Explore');
const card = document.getElementById('Card');
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', divExpand);
const exploreTitle = document.getElementById('exploreTitle');

function Explore() {

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
        duration: 2000,
        easing: 'ease-out'
    }

    let an = explore.animate(slideIn, slideTiming);
    an.finished.then(() => {
        explore.classList.remove('hidden');
    })

}

function divExpand() {
    let fadeOut = [
        {opacity: '100%'},
        {opacity: '50%'},
        { opacity: '0%' },
    ]
    let fadeTiming = {
        fill: 'forwards',
        duration: 200,
        easing: 'ease-out'
    }
    let cardGrow = [
        
        {   
            left: '-200px',
            height: '0rem',
            width: '0rem',
            opacity: '0%'
        },
        {left: '-100px',
        height: '5rem',
        width: '5rem',
        opacity: '10%'},
        { left: '-50px',
        height: '10rem',
        width: '10rem',
        opacity: '30%'},
        { left: '10px',
        height: '20rem',
        width: '20rem',
            opacity: '60%'
        },
        {left: '10px',
        height: '40rem',
        width: '30rem',
        opacity: '100%'}
        
    ]
    let growTiming = {
        fill: 'forwards',
        duration: 200,
        easing: 'linear'
    }
    let fade = explore.animate(fadeOut, fadeTiming);
    fade.finished.then(() => {
        
        card.animate(cardGrow, growTiming);
        card.classList.remove('collapse');
    })
    

}