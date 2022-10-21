console.log("Iniciando BOT");
//Configurando API

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


//Testando API // Procura por todos os tweets contendo a palavra desde uma data
var params = { q: 'denis since:2022-07-11', count: 2 }

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
    console.log(data);
}
    
