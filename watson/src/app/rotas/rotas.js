const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.all('/', function(req, resp) {
        var watson = require('watson-developer-cloud');

        var assistant = new watson.AssistantV1({
        iam_apikey: 'vigO0uGaJx8sHN6Y7SftOQ5IiYmKwhq5J27zVOyb9IUB',
        version: '2018-09-20',
        url: 'https://gateway.watsonplatform.net/assistant/api/'
        });

        var params = {
            workspace_id: '84bc22d0-2a8a-499f-9aaa-0de2cc7a6376',
            input: {'text': req.body.pergunta},           
        };

        assistant.message(params,  function(err, response) {
            if (err)
                console.log('error:', err);
            else
                console.log(JSON.stringify(response, null, 2));
               
                var resposta = response.output.text;                                
                resp.marko(
                    require('../views/base/home/home.marko'),
                { resposta : resposta}
            );                 
        });   
        console.log("AQUI: " );
        /*
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const dom = new JSDOM(`<h1 id="h1">eu aqui</h1>`);

      
        var teste = dom.window.document.getElementById("h1").textContent;

        console.log(teste);
*/

    });
    
    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                ))
                .catch(erro => console.log(erro));
    });

    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
                .then(livro => 
                    resp.marko(
                        require('../views/livros/form/form.marko'), 
                        { livro: livro }
                    )
                )
                .catch(erro => console.log(erro));
    });

    app.post('/livros', function(req, resp) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    app.put('/livros', function(req, resp) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        
        livroDao.atualiza(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    app.delete('/livros/:id', function(req, resp) {
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => console.log(erro));
    });

    /*-------  WATSON  ---------------*/
    app.get('/maps', (req, resp) => {
        console.log('ok');
   
        const googleMapsClient = require('@google/maps').createClient({
            key: 'AIzaSyAxLNRXAO_NbGihsbK02zS5TOJCnTo4jIo',
            Promise: Promise
        });
        resp.marko(require('../views/base/home/maps.marko'));
        
        /*
        let request = require('request');
 
        let url = `http://ip-api.com/json`
        let dados = '';
         
        request(url, function (err, response, body) {
           if(err){
               console.log('error:', err);
           } else {
               let ipInfo = JSON.parse(body);
               dados = `?????????? WHERE AM I ?????????
                        -------------------------------
                        IP: ${ipInfo.query}
                        Country: ${ipInfo.country}
                        City: ${ipInfo.city}
                        Region: ${ipInfo.regionName}
                        Lat: ${ipInfo.lat}
                        Lon: ${ipInfo.lon}
                        Organization: ${ipInfo.org}
                        -------------------------------
                        Dev by CP 2019`
               console.log(dados);
           }
        });*/
    });

     /*-------  WATSON  ---------------*/
     app.get('/stt', (req, resp) => {
        console.log('stt');
        resp.marko(require('../views/base/home/stt.marko'));
    });

     /*-------  WATSON  ---------------*/
     app.get('/demo', (req, resp) => {
        console.log('demo');
        resp.marko(require('../views/base/home/demo.marko'));
    });
};