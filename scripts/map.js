 function initMap(){
          var pos={lat: 21.957350138701074,lng: -159.35599926326904}
            var opt={
                center:pos,
                zoom:20
            }
            var map=new google.maps.Map(document.getElementById("map"),opt);
            var marker= new google.maps.Marker({
              position:pos,
              map:map
            })
            
        };
