export class Map {
    constructor(latitud, longitud, zoom, layer, attribution, locationPopup) {
        this.latitud = latitud;
        this.longitud = longitud;
        this.zoom = zoom;
        this.layer = layer;
        this.attribution = attribution;
        this.locationPopup = locationPopup;
    }

    chargeMap() {
        // eslint-disable-next-line no-undef
        let map = L.map('map').setView([this.latitud, this.longitud], this.zoom)
        
        // eslint-disable-next-line no-undef
        L.tileLayer(this.layer, {
            attribution: this.attribution
        }).addTo(map);

        // eslint-disable-next-line no-undef
        L.marker([this.latitud, this.longitud]).addTo(map).bindPopup(this.locationPopup).openPopup();       
    }
}