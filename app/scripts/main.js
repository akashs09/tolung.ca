'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
  });
})(jQuery);

function init_map() {
  var var_location = new google.maps.LatLng(43.6969215,-79.3958298);

  var var_mapoptions = {
    center: var_location,
    zoom: 17
  };

  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title:"Venice"});

  var var_map = new google.maps.Map(document.getElementById("map"),
    var_mapoptions);

  var_marker.setMap(var_map);

}

google.maps.event.addDomListener(window, 'load', init_map);
