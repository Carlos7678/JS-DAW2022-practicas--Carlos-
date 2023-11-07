let map =L.map('map').setView([39.493889,-0.683556],15)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {      
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var marker = L.marker([39.493889,-0.683556]).addTo(map);

marker.bindPopup("Estamos aquí").openPopup();