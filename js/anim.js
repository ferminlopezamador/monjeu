var cssLink = document.getElementsByTagName('link')[1]

var buttonMoutha = document.body.querySelector('#buttonmoutha');
var buttonTalk = document.body.querySelector('#buttontalk');
var buttonSmile = document.body.querySelector('#buttonsmile');
var buttonRoll = document.body.querySelector('#buttonrollEyes');
var buttonMoutho = document.body.querySelector('#buttonmoutho');

function changeCssLinkToTalk() {
    cssLink.setAttribute('href','css/anim-visage-talk.css');
}
function changeCssLinkToMouthA() {
    cssLink.setAttribute('href','css/anim-visage-moutha.css');
}
function changeCssLinkToSmile() {
    cssLink.setAttribute('href','css/anim-visage-smile.css');
}
function changeCssLinkToRoll() {
    cssLink.setAttribute('href','css/anim-visage-rolleyes.css');
}
function changeCssLinkToMouthO() {
    cssLink.setAttribute('href','css/anim-visage-moutho.css');
}

buttonMoutha.addEventListener('click',changeCssLinkToMouthA);
buttonTalk.addEventListener('click',changeCssLinkToTalk);
buttonSmile.addEventListener('click',changeCssLinkToSmile);
buttonRoll.addEventListener('click',changeCssLinkToRoll);
buttonMoutho.addEventListener('click',changeCssLinkToMouthO);
