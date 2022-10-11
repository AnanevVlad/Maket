 function initMap(){
          var pos={lat: 21.957350138701074,lng: -159.35599926326904}
            var opt={
                center:pos,
                zoom:17,
                styles:[
                  {
                      "featureType": "poi.attraction",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.business",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.government",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.medical",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.park",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.place_of_worship",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.school",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "poi.sports_complex",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  }
              ],
                
            }
            var map=new google.maps.Map(document.getElementById("map"),opt);
            var marker= new google.maps.Marker({
              position:pos,
              map:map
            })
            
        };
