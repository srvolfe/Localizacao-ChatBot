
const app = require('./src/config/custom-express');

app.listen(3000, function(){
    console.log('servidor ok');
});


/*
const http = require('http');

const servidor  = http.createServer(function (req, resp) {

        let html = '';
        if (req.url == '/'){
            html = 
            `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Street Uno </h1>
                <form action="">
                    <textarea id="resposta" name="resposta"></textarea>
                    <input id="pergunta" type="text" name="pergunta">
                    <button onclick="`+ pegarValores() +`" type="submit">enviar</button>
                    
                </form>
            </body> 
        </html>
    `
        }

        else if (req.url){

        }

/*
    var watson = require('watson-developer-cloud');

    var assistant = new watson.AssistantV1({
      iam_apikey: 'vigO0uGaJx8sHN6Y7SftOQ5IiYmKwhq5J27zVOyb9IUB',
      version: '2018-09-20',
      url: 'https://gateway.watsonplatform.net/assistant/api/'
    });
    
    function conversar(pergunta){
        console.log(pergunta);
        //pergunta = "quero comprar um celular";
        
        assistant.message({
        workspace_id: '84bc22d0-2a8a-499f-9aaa-0de2cc7a6376',
        input: {'text': pergunta}
      },  function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
          console.log('teste: ' + response.output.text)
      })
    }
*/
 /*

    resp.end(html);
    
    function pegarValores(){
        //var pergunta = document.getElementById('pergunta').value;
        console.log('pergunta');
    }
    
});
servidor.listen(3000);

/*`+ conversar("entro", ) +`*/