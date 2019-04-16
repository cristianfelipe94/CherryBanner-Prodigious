
let _loadedImages = 0;
const _imageArray = new Array(
    'background1-level4.jpg',
    'cherry-big.png',
    'cherry-mid.png',
    'cherry-move.png',
    'cherry-pair.png',
    'cherry-small.png',
    'cherry-small-2.png',
    'cta-banner.png',
    'cta-action.png',
    'finalBackground-level4.jpg',
    'noArtificialTitle-level4.png',
    'nothingElseTitle-level4.png',
    'product-level4.png',
    'realCherryTitle-level4.png',
    'seal-level4.png'
);

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (let i = 0; i < _imageArray.length; i++) {
        const _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;
    if(_loadedImages == _imageArray.length) init();
}

function init(){
    const css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);
    initAnimations();
}

function initAnimations(){
    const _tlShowing = new TimelineMax();
    _tlShowing
    .set('.banner',{display: 'block', onComplete: textIntroAnimations})
    .staggerFrom('.js-move-cherry',1,{ease: Bounce.easeOut, top: '-=400'}, 0.5);
}

function textIntroAnimations(){
    const _tlTextIntro = new TimelineMax();
    _tlTextIntro
    .to('.ui-firsttext-intro', 2,{opacity: ('1')}, 1)
    .to('.ui-firsttext-intro', 2,{opacity: ('0'), onComplete: textMidTroAnimations}, 5);
}

function textMidTroAnimations(){
    const _tlTextSubIntro = new TimelineMax();
    _tlTextSubIntro
    .to('.ui-secondtext-intro', 2,{opacity: ('1')}, 2)
    .to('.ui-secondtext-intro', 2,{opacity: ('0'), onComplete: clearingCherries}, 4);
}

function clearingCherries(){
    const _tlClear = new TimelineMax();
    _tlClear
    .to('.final-background-display', 0.5,{opacity: ('1')}, 0.5)
    .to('.final-quote-display', 1, {opacity: ('1'), onComplete: productShotAnim})
    .to('.js-move-left', 1,{ease: Power1.easeOut, left: '-=300'}, 0.5)
    .to('.js-move-right', 1,{ease: Power1.easeOut, left: '+=500'}, 0.10);
}

function productShotAnim(){
    const _tlProduct = new TimelineMax();
    _tlProduct
    .from('.product-shot-position', 0.5,{top: '+=250'})
    .to('.product-shot-position', 0.5,{opacity: ('1')})
    .to('.product-seal-position', 0.5,{scale: ('1'), opacity: ('1'), onComplete:actionsButton})
    .to('.bannerSize',0.1,{zIndex: ('50')});
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', () => { TweenMax.to('.light-animation-offHover', 1,{left: '+=90'})});
    _btnExit.addEventListener('mouseout', () => { TweenMax.to('.light-animation-offHover', 1,{left: ('4')})});
}