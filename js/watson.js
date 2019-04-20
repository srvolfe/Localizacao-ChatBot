var AssistantV1 = require('watson-developer-cloud/assistant/v1');


var assistant = new AssistantV1({
  version: '2018-09-20',
  iam_apikey: 'vigO0uGaJx8sHN6Y7SftOQ5IiYmKwhq5J27zVOyb9IUB',
  url: '{url}'
});

assistant.message({}, resposta);

function resposta(erro, response){
  console.log(response);
}