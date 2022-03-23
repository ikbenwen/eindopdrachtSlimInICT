// Een werkende klok.
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

//Zet een 0 voor het getal als het lager dan 10 is.
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

startTime();

// function yesOrNo(){
//     for (let i = 0; i < ; i++) {
//
//     }
// }

//Het maken en vullen van de opleidingkaarten met data uit data.js
function makeEducationCard(){
    var cards = [];

    for (let i = 0; i < opleidingen.length; i++) {
        cards += '<div class="education-card">' +
            '<h4>studie: '+ opleidingen[i].studie +'</h4>' +
            '<p>schoolnaam: '+ opleidingen[i].schoolnaam +'</p>'+
            '<p>beginjaar: '+ opleidingen[i].beginjaar +'</p>'+
            '<p>eindjaar: '+ opleidingen[i].eindjaar +'</p>'+
            '<p>afgerond: '+opleidingen[i].diplomaBehaald+'</p>'+
            '</div>';
    }
    var educationCardContainer = document.getElementById('education-card-container');
    educationCardContainer.innerHTML = cards;
}

makeEducationCard();

//maken van werkervarings kaarten en vullen met data uit data.js
function makeExperienceCards() {
    var cards = [];

    for (let i = 0; i < werkervaring.length; i++) {
        cards += '     <div class="experience-card">' +
            '                    <h4 id="functie">functie:'+ werkervaring[i].functie +' </h4>' +
            '                    <div class="hidden">' +
            '                        <p>beginjaar: '+ werkervaring[i].beginjaar +'  </p>' +
            '                        <p>eindjaar: '+ werkervaring[i].eindjaar +'  </p>' +
            '                        <p>werkgever: '+ werkervaring[i].werkgever +'  </p>' +
            '                        <p>functieomschrijving: '+ werkervaring[i].taken +'  </p>' +
            '                    </div>' +
            '                </div>'
    }

    var experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = cards;
}

makeExperienceCards();

//laat de bijbehorende gegevens zien wanneer er op de functie titel wordt geklikt.
function showInfo(e) {
    var hidden = e.target.parentElement.children[1];
    var card = e.target.parentElement;
    //verberg alle info die evt. al zichtbaar is.
    var allHidden = document.getElementsByClassName('hidden');

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.height = '150px'
        allHidden[i].style.display = 'none';
    }
    if(hidden.style.display === 'none'){
        hidden.style.display = 'flex';
        card.style.height = '350px';
    } else {
        hidden.style.display = 'none';
    }
}

//laat elke 3 seconde een ander talent zien zonder plugin
var timer = setInterval(skillSlider, 3000);
var logoNumber = 0;

function skillSlider(){
    var logo = document.getElementById('talent-logo');
    var level = document.getElementById('talent-p');
    var name = document.getElementById('talent-name');
    var numberOfLogos = computerskills.length;
    var stars = '';

    if (logoNumber < numberOfLogos){
        logo.src = 'images/logos/' + computerskills[logoNumber].logo;
        name.innerHTML = computerskills[logoNumber].skill;

        for (let i = 0; i < computerskills[logoNumber].level; i++) {
            stars += '&#9733;';
        }
        level.innerHTML =  stars;
        logoNumber ++;
    } else {
        logoNumber = 0;
    }
}

// paralax scroll plugin
var image = document.getElementsByClassName('galaxy');
new simpleParallax(image, {
    orientation: 'right',
    delay: .6,
    transition: 'ease',
    scale: 1.5,
});

//eventlistner functietitel
var cards = document.getElementsByClassName('experience-card');
for (let i = 0; i < cards.length; i++) {
    cards[i].firstElementChild.addEventListener('click', showInfo);
}
