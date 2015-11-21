var fn = {
	ready: function(){
		document.addEventListener("deviceready",fn,init,false);
	},
	init: function () {
			drawMap: function(19.065799,-98.218368){
},
drawMap: function(lat,lng){
					//Posición del mapa
					var latlng = new google.maps.LatLng(lat, lng);
					var myOptions = {
						zoom: 14,
						center: latlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
					var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
					//Marcador
					var marker = new google.maps.Marker({
						position: latlng, 
						map: map, 
						title:"Mi posición"
					});
	}
}
$(fn.ready);