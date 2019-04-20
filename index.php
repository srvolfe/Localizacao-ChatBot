
<?php include ('cabecalho.php') ?>
 
  
<link rel="stylesheet" href="css/dialogIbm.css">
<body>
  <div class='Chat__header'>
    <h2>    
      <a>       
        Lucas Volfe
      </a>
    </h2>    
  </div>
  <div class="container">
    <p>Projeto criado para matéria de empreendedorismo, um software de localização interna pensando na acessibilidade de pessoas com deficiência visual. Este protótipo ainda não esta pronto, está na parte onde pego a resposta do Bot com a coordenada do destino e gera um mapa, a acessibilidade entra com o processo de Text To Speech & Speech To Text, onde o usuário com deficiência visual terá a possibilidade de interagir com o software através de comandos de voz.</p>
    <p>Dentro deste mesmo projeto tenho uma versão que fiz para estudos em Node.js.</p>
    <p>O mapa a ser gerado sera do Google Maps, para testes também foi utilizado o Open Maps, de primeiro momento sera um modelo semelhante a <a href="maps.php">este</a>, aprestando um trajeto, como espaços privados (universidades, centro de eventos) não possuem um mapeado e as ferramentas disponibilizadas não permitem a criação de novas rotas particulares sera necessário tomar uma abordagem diferenciada. Existem outros métodos para fazer o "mesmo" trabalho com outras ferramentas mas no entanto geraram custos adicionais em hardware.</p>
    <p>Este Bot foi treinado com alguns tópicos, enviando essas pergunas tera uma resposta treinada:</p>
    <ul>
      <li>Quero comprar um celular</li>
      <li>Se eu adicionar ao carrinho de compras, ele fica reservado?</li>
      <li>Bloco g (aqui vem um resposta, parte dela invisível ao usuário com a coordenada)</li>
    </ul>
  </div>
  <div class='Chat__holder'>
    <div class='Chat__body'></div>
  </div>
  

  <div id="map" style="height: 400px; width:400px;"></div>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  
  <script src="js/ibm.chat.0.0.4.js"></script>
  <script src="js/active-map.js"></script>
  
  
  <script>
    const config = {
      bot_image: null, 
      bot_name: '',
      debug: true,
      element: document.querySelector('.Chat__body'),
      integration_id: '21f3b9b4-6a33-4614-9752-60c4d8ee6924',
      post_url: 'https://assistant-chat-us-south.watsonplatform.net/public/message/'
    };
    const chat = new WatsonChat(config);

    $('.Chat__header').css('marginTop', $('.topo').height());

  </script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxLNRXAO_NbGihsbK02zS5TOJCnTo4jIo&callback=initMap"
    async defer></script>


</body>
</html>
