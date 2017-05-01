   var _c=0;
   var marker;
      var infowindow;
      function initMap() {
       
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center:  {lat: 23, lng: 85}
        });

      

     
        infowindow = new google.maps.InfoWindow({
          content: message[_c],
          maxWidth: 200
        });

        marker = new google.maps.Marker({
          position: pop[_c],
           content: message[_c],
           icon: 'images/orange.png',
          map: map
        });

     marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        marker = new google.maps.Marker({
        position: {lat: 23, lng: 85},

           icon: 'images/orange.png',
          map: map
        });

    
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        
      }