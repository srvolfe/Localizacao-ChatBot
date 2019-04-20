
var cordanadas = $('#sala').textContent;
console.log(cordanadas);

$('.WatsonChat__messages').on('change', function(){
  alert("The text has been changed.");
});

 
  if(cordanadas != null){
  
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: cordanadas,
        zoom: 8
      });
    }
  }

