const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const watsonAssistant = new AssistantV1({
  version: '2018-09-20',
  username: 'apikey',
  password: 'vigO0uGaJx8sHN6Y7SftOQ5IiYmKwhq5J27zVOyb9IUB',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

module.exports = watsonAssistant;





/*
var watson = require('watson-developer-cloud');

var assistant = new watson.AssistantV1({
  iam_apikey: 'vigO0uGaJx8sHN6Y7SftOQ5IiYmKwhq5J27zVOyb9IUB',
  version: '2018-09-20',
  url: 'https://gateway.watsonplatform.net/assistant/api/'
});

assistant.message({
  workspace_id: '84bc22d0-2a8a-499f-9aaa-0de2cc7a6376',
  input: {'text': 'quero comprar um celular'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
*/