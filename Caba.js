(function CabaMoviesControl() { var cabaM = angular.module('theater',[]);
    
    cabaM.controller('MovieController', function(){
       this.movie = movies; 
            
    var movies =
{
    cast:"Jonah Hill, Channing Tatum, Ice Cube, Wyatt Russell, Jimmy Tatro,Dave Franco, Peter Stormare, Amber Stevens, Nick Offerman, Anna Faris",
    country:"United States",
    director:"Philip Lord, Chris Miller",
    genre:"Comedia",
    plot:"Los agentes de policía Jenko (Channing Tatum) y Schmidt (Jonah Hill)tendrán esta vez que infiltrarse en un campus universitario, listos para aplicar lo que han aprendido hasta ahora sobre actuar encubiertos y así intentar desarticular otra red de narcotráfico...  Secuela de Infiltrados en clase.",
    poster:"http://accc1a9ebe7c8c16b554-09a9a882c86888fb9f097647bff07b4a.r22.cf1.rackcdn.com/3575.jpg",
    showings:
            [{"room":"Sala 04",
              "schedules":
              [{"day":"Mier",
                "price":"$250",
                "times":["6:10PM","8:40PM"]}],
    theater:"Acrópolis Center [CC]"}],
    title: "22 Jump Street",
    trailer:"//www.youtube.com/embed/q0vttO4wCFY",
    year:"2014"
};
})
                              };
