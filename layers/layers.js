var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BuchananCommunity_1 = new ol.format.GeoJSON();
var features_BuchananCommunity_1 = format_BuchananCommunity_1.readFeatures(json_BuchananCommunity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuchananCommunity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuchananCommunity_1.addFeatures(features_BuchananCommunity_1);
var lyr_BuchananCommunity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuchananCommunity_1, 
                style: style_BuchananCommunity_1,
                popuplayertitle: "Buchanan Community",
                interactive: true,
    title: 'Buchanan Community<br />\
    <img src="styles/legend/BuchananCommunity_1_0.png" /> A<br />\
    <img src="styles/legend/BuchananCommunity_1_1.png" /> B<br />\
    <img src="styles/legend/BuchananCommunity_1_2.png" /> C<br />\
    <img src="styles/legend/BuchananCommunity_1_3.png" /> D<br />'
        });

lyr_googlesatellite_0.setVisible(true);lyr_BuchananCommunity_1.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_BuchananCommunity_1];
lyr_BuchananCommunity_1.set('fieldAliases', {'fid': 'fid', 'CCWCode': 'CCWCode', 'Countyy': 'Countyy', 'Countyy Code': 'Countyy Code', 'Districtt ': 'Districtt ', 'Districtt Code': 'Districtt Code', 'Communityy Name': 'Communityy Name', 'Cluster Name': 'Cluster Name', 'Cluster Number': 'Cluster Number', });
lyr_BuchananCommunity_1.set('fieldImages', {'fid': 'TextEdit', 'CCWCode': 'TextEdit', 'Countyy': 'TextEdit', 'Countyy Code': 'TextEdit', 'Districtt ': 'TextEdit', 'Districtt Code': 'TextEdit', 'Communityy Name': 'TextEdit', 'Cluster Name': 'TextEdit', 'Cluster Number': 'Range', });
lyr_BuchananCommunity_1.set('fieldLabels', {'fid': 'hidden field', 'CCWCode': 'hidden field', 'Countyy': 'hidden field', 'Countyy Code': 'hidden field', 'Districtt ': 'hidden field', 'Districtt Code': 'hidden field', 'Communityy Name': 'inline label - visible with data', 'Cluster Name': 'inline label - visible with data', 'Cluster Number': 'inline label - visible with data', });
lyr_BuchananCommunity_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});