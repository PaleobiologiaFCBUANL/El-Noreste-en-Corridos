var wms_layers = [];

var format_Paises_0 = new ol.format.GeoJSON();
var features_Paises_0 = format_Paises_0.readFeatures(json_Paises_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paises_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paises_0.addFeatures(features_Paises_0);
var lyr_Paises_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paises_0, 
                style: style_Paises_0,
                popuplayertitle: 'Paises',
                interactive: false,
                title: '<img src="styles/legend/Paises_0.png" /> Paises'
            });
var format_Noreste_1 = new ol.format.GeoJSON();
var features_Noreste_1 = format_Noreste_1.readFeatures(json_Noreste_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noreste_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noreste_1.addFeatures(features_Noreste_1);
var lyr_Noreste_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noreste_1, 
                style: style_Noreste_1,
                popuplayertitle: 'Noreste',
                interactive: false,
                title: '<img src="styles/legend/Noreste_1.png" /> Noreste'
            });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.400000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Noreste_Muni_3 = new ol.format.GeoJSON();
var features_Noreste_Muni_3 = format_Noreste_Muni_3.readFeatures(json_Noreste_Muni_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noreste_Muni_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noreste_Muni_3.addFeatures(features_Noreste_Muni_3);
var lyr_Noreste_Muni_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noreste_Muni_3, 
                style: style_Noreste_Muni_3,
                popuplayertitle: 'Noreste_Muni',
                interactive: false,
                title: '<img src="styles/legend/Noreste_Muni_3.png" /> Noreste_Muni'
            });
var format_Corridos_4 = new ol.format.GeoJSON();
var features_Corridos_4 = format_Corridos_4.readFeatures(json_Corridos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridos_4.addFeatures(features_Corridos_4);
var lyr_Corridos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridos_4, 
                style: style_Corridos_4,
                popuplayertitle: 'Corridos',
                interactive: true,
    title: 'Corridos<br />\
    <img src="styles/legend/Corridos_4_0.png" /> Amor<br />\
    <img src="styles/legend/Corridos_4_1.png" /> Caballos<br />\
    <img src="styles/legend/Corridos_4_2.png" /> Contrabando<br />\
    <img src="styles/legend/Corridos_4_3.png" /> Cultura<br />\
    <img src="styles/legend/Corridos_4_4.png" /> Desamor<br />\
    <img src="styles/legend/Corridos_4_5.png" /> Enfrentamiento<br />\
    <img src="styles/legend/Corridos_4_6.png" /> Héroe regional<br />\
    <img src="styles/legend/Corridos_4_7.png" /> Social<br />\
    <img src="styles/legend/Corridos_4_8.png" /> Valor<br />\
    <img src="styles/legend/Corridos_4_9.png" /> <br />' });

lyr_Paises_0.setVisible(true);lyr_Noreste_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Noreste_Muni_3.setVisible(true);lyr_Corridos_4.setVisible(true);
var layersList = [lyr_Paises_0,lyr_Noreste_1,lyr_OpenStreetMap_2,lyr_Noreste_Muni_3,lyr_Corridos_4];
lyr_Paises_0.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', });
lyr_Noreste_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'layer': 'layer', 'path': 'path', });
lyr_Noreste_Muni_3.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'layer': 'layer', 'path': 'path', });
lyr_Corridos_4.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Título', 'Autor': 'Autor(es)', 'Tematica': 'Temática', 'Fecha_suceso': 'Fecha del suceso', 'Link': 'URL', });
lyr_Paises_0.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_Noreste_1.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Noreste_Muni_3.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Corridos_4.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Autor': 'TextEdit', 'Tematica': 'TextEdit', 'Fecha_suceso': 'TextEdit', 'Link': 'TextEdit', });
lyr_Paises_0.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', });
lyr_Noreste_1.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOMGEO': 'hidden field', 'NOM_ENT': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Noreste_Muni_3.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'hidden field', 'CVE_ENT': 'hidden field', 'CVE_MUN': 'hidden field', 'NOMGEO': 'hidden field', 'NOM_ENT': 'header label - always visible', 'COV_': 'hidden field', 'COV_ID': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Corridos_4.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - always visible', 'Autor': 'inline label - always visible', 'Tematica': 'inline label - always visible', 'Fecha_suceso': 'inline label - visible with data', 'Link': 'inline label - always visible', });
lyr_Corridos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});