
<?php include ('cabecalho.php') ?>

<style>  
  #map {
    height: 90vh;
    width: 90vw;
  }
</style>
</head>
<body>

<div class="container">
  <div id="map"></div>
</div>


<script>
  var map, infoWindow;
  function initMap() {

    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        
        var pos = {
          /*lat: position.coords.latitude,
          lng: position.coords.longitude*/
          lat: -27.092786,
          lng: -52.666475
        };

        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 18		  
        });
              
        var myPosition = new google.maps.Marker({
          position: { lat:-27.094085, lng:-52.666231},
          map: map,
          label: '*',
          animation: google.maps.Animation.DROP
        });
        myPosition.addListener('click', toggleBounce);

        var blocoG = { lat: -27.092230, lng: -52.665323 }; 
        var destino = new google.maps.Marker({
          position: blocoG,
          map: map,
          label: 'G'
        });

        function toggleBounce() {
          if (myPosition.getAnimation() !== null) {
            myPosition.setAnimation(null);
          } else {
            myPosition.setAnimation(google.maps.Animation.BOUNCE);
          }
        }

        var flightPlanCoordinates = [
          {lat: -27.092786, lng: -52.666475},
          {lat: -27.092951, lng: -52.666100}, 
          {lat: -27.092742, lng: -52.665982},
          {lat: -27.092662, lng: -52.666128},
          {lat: -27.092052, lng: -52.665776},
          {lat: -27.092236, lng: -52.665352}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);

        
        var minhaPos = new google.maps.Marker({
          position: pos,
          map: map,
          label: 'X'
        });
 



  
  /*-------------------
  addMaker(pos, map);
  infoWindow.setPosition(pos);
  infoWindow.setContent('Location found.');
  infoWindow.open(map);
  map.setCenter(pos);*/
  console.log(position);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      },{enableHighAccuracy: true, maximumAge: 50000, timeout: 50000});
    }
else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

</script>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxLNRXAO_NbGihsbK02zS5TOJCnTo4jIo&callback=initMap">
</script>
</body>
</html>