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
const exploreSpan = document.getElementById('exploreSpan');
const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', divShrink);
const cardBody = document.getElementById('cardBody');

function Explore() {

    let slideIn = [
        {opacity: '0%'},
        { marginLeft: '-3000px' },
        { marginLeft: '-1500px' },
        { marginLeft: '-1250px' },
        {opacity: '50%'},
        { marginLeft: '-1000px' },
        { marginLeft: '-600px' },
        { opacity: '100%' },
        { marginLeft: '-18rem' },
        { marginLeft: '-250px' },
        {marginLeft: '-17rem'}
    ]

    let slideTiming = {
        fill: 'forwards',
        duration: 2000,
        easing: 'ease-out'
    }

    let an = explore.animate(slideIn, slideTiming);
    an.finished.then(() => {
        explore.classList.remove('opaque');
    })

}

function divExpand() {
    let fadeIn = [
        {opacity: '0%'},
        {opacity: '50%'},
        { opacity: '100%' },
    ]
    let fadeInTiming = {
        fill: 'forwards',
        duration: 1000,
        easing: 'ease-in'
    }
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
        
        {   marginLeft: '-15rem',
            height: '0rem',
            width: '0rem',
            opacity: '0%'
        },
        {
            marginLeft: '-16rem',
        height: '5rem',
        width: '5rem',
        opacity: '10%'},
        {
            marginLeft: '-317px',
        height: '10rem',
        width: '10rem',
        opacity: '30%'},
        {
            marginLeft: '-18px',
        height: '20rem',
        width: '20rem',
            opacity: '60%'
        },
        {
            marginLeft: '-20px',
        height: '40rem',
        width: '30rem',
        opacity: '100%'}
        
    ]
    let growTiming = {
        fill: 'forwards',
        duration: 200,
        easing: 'linear'
    }
    let fade = exploreTitle.animate(fadeOut, fadeTiming);
    exploreBtn.animate(fadeOut, fadeTiming);
    fade.finished.then(() => {
        exploreTitle.classList.add('hidden');
        exploreSpan.classList.add('hidden');
        card.animate(cardGrow, growTiming);
        cardBody.animate(fadeIn, fadeInTiming);
        card.classList.remove('collapse');
    })
    

}

function divShrink() {
    let fadeIn = [
        {opacity: '0%'},
        {opacity: '50%'},
        { opacity: '100%' },
    ]
    let fadeTiming = {
        fill: 'forwards',
        duration: 500,
        easing: 'ease-in'
    }
    let fadeOut = [
        {opacity: '90%'},
        {opacity: '20%'},
        { opacity: '0%' },
    ]
    let fadeOutTiming = {
        fill: 'forwards',
        duration: 100,
        easing: 'ease-in'
    }
    let cardShrink = [
        
        {
            
            height: '40rem',
            width: '30rem',
            opacity: '100%'},
            {
                
                height: '20rem',
                width: '20rem',
                opacity: '60%'
            },
        {
            
            height: '10rem',
            width: '10rem',
            opacity: '20%'},
        {
            
            height: '5rem',
            width: '5rem',
            opacity: '10%'
        },
        {
            
            height: '0rem',
            width: '0rem',
            opacity: '0%'}
        
    ]
    let shrinkTiming = {
        fill: 'forwards',
        duration: 200,
        easing: 'linear'
    }
    cardBody.animate(fadeOut, fadeOutTiming);
    
    let shrinking = card.animate(cardShrink, shrinkTiming);
    exploreBtn.animate(fadeIn, fadeTiming);
    exploreTitle.animate(fadeIn, fadeTiming);
    card.classList.add('collapse');
    shrinking.finished.then(() => {
        exploreTitle.classList.remove('hidden');
        exploreSpan.classList.remove('hidden');
    })
}