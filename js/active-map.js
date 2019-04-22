/*function refreshData()
{
    x = 3;  
    
    if ( $('.WatsonChat__received div:contains(mapa)') ){
      //lat = $('.WatsonChat__received div').text().slice(60,70);
      //lng = $('.WatsonChat__received div').text().slice(72,82);  
      
      console.log('lat, lng');
    }
    
    
    setTimeout(refreshData, x*1000);
  }
  refreshData(); // execute function

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -27.092236, lng: -52.665352},
      zoom: 18
    });


    function Marcacoes(){
      markerUsuario = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: -27.092236, lng: -52.665352}
      });
      markerUsuario.addListener('click', toggleBounce);
  
      markerDest = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: -27.093188, lng: -52.666027}
      });
      markerDest.addListener('click', toggleBounce);
    }
  }  

function toggleBounce() {
  if (markerDest.getAnimation() !== null) {
    markerDest.setAnimation(null);
  } else {
    markerDest.setAnimation(google.maps.Animation.BOUNCE);
  }
}

*/