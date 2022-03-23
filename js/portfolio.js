function makePortfolio() {
    var cards = [];

    for (let i = 0; i < projects.length; i++) {
        cards += '<div class="portfolio-card">' +
            '<a href=' + projects[i].url +'>'+
            '<img class="thumbnail" src=' + '../images/portfolio-images/' + projects[i].picture + '>' +
            '<h4>' + projects[i].projectName + '</h4>'+
            '<p>' + projects[i].description + '</p>'+
            '</a>'+
            '</div>';
    }

    var portfolioContainer = document.getElementById('portfolio-card-container');
    portfolioContainer.innerHTML = cards;
}

makePortfolio();
