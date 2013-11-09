/**
 * Leaflet.UserMarker v1.0
 * 
 * Author: Jonatan Heyman <http://heyman.info>
 */

(function() {
    var iconPulsingSmall = L.divIcon({
        className: "leaflet-usermarker",
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
        labelAnchor: [11, -3],
        html: '<i class="pulse"></i>'
    });
    L.UserMarker = L.Marker.extend({
        initialize: function(latlng, options) {
            options = L.Util.setOptions(this, options);           
            this.options.icon = iconPulsingSmall;        
            // call super
            L.Marker.prototype.initialize.call(this, latlng, this.options);       
        },    
        onAdd: function(map) {
            // super
            L.Marker.prototype.onAdd.call(this, map);            
        }
    });
    L.userMarker = function (latlng, options) {
        return new L.UserMarker(latlng, options);
    };
}).call(this);