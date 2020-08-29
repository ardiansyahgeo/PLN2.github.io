var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_indeks_bahaya_TSUNAMI_2 = new ol.format.GeoJSON();
var features_indeks_bahaya_TSUNAMI_2 = format_indeks_bahaya_TSUNAMI_2.readFeatures(json_indeks_bahaya_TSUNAMI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_TSUNAMI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_TSUNAMI_2.addFeatures(features_indeks_bahaya_TSUNAMI_2);
var lyr_indeks_bahaya_TSUNAMI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_TSUNAMI_2, 
                style: style_indeks_bahaya_TSUNAMI_2,
                interactive: true,
    title: 'indeks_bahaya_TSUNAMI<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_2_0.png" /> sangat rendah<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_2_1.png" /> rendah<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_2_2.png" /> sedang<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_2_3.png" /> tinggi<br />\
    <img src="styles/legend/indeks_bahaya_TSUNAMI_2_4.png" /> sangat tinggi<br />'
        });
var format_indeks_bahaya_GEA_3 = new ol.format.GeoJSON();
var features_indeks_bahaya_GEA_3 = format_indeks_bahaya_GEA_3.readFeatures(json_indeks_bahaya_GEA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_GEA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_GEA_3.addFeatures(features_indeks_bahaya_GEA_3);
var lyr_indeks_bahaya_GEA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_GEA_3, 
                style: style_indeks_bahaya_GEA_3,
                interactive: true,
    title: 'indeks_bahaya_GEA<br />\
    <img src="styles/legend/indeks_bahaya_GEA_3_0.png" /> sangat rendah<br />\
    <img src="styles/legend/indeks_bahaya_GEA_3_1.png" /> rendah<br />\
    <img src="styles/legend/indeks_bahaya_GEA_3_2.png" /> sedang<br />\
    <img src="styles/legend/indeks_bahaya_GEA_3_3.png" /> tinggi<br />\
    <img src="styles/legend/indeks_bahaya_GEA_3_4.png" /> sangat tinggi<br />'
        });
var format_indeks_bahaya_LONGSOR_4 = new ol.format.GeoJSON();
var features_indeks_bahaya_LONGSOR_4 = format_indeks_bahaya_LONGSOR_4.readFeatures(json_indeks_bahaya_LONGSOR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_LONGSOR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_LONGSOR_4.addFeatures(features_indeks_bahaya_LONGSOR_4);
var lyr_indeks_bahaya_LONGSOR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_LONGSOR_4, 
                style: style_indeks_bahaya_LONGSOR_4,
                interactive: true,
    title: 'indeks_bahaya_LONGSOR<br />\
    <img src="styles/legend/indeks_bahaya_LONGSOR_4_0.png" /> tinggi<br />\
    <img src="styles/legend/indeks_bahaya_LONGSOR_4_1.png" /> sangat tinggi<br />'
        });
var format_LINE_SPELL_5 = new ol.format.GeoJSON();
var features_LINE_SPELL_5 = format_LINE_SPELL_5.readFeatures(json_LINE_SPELL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINE_SPELL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINE_SPELL_5.addFeatures(features_LINE_SPELL_5);
var lyr_LINE_SPELL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINE_SPELL_5, 
                style: style_LINE_SPELL_5,
                interactive: true,
                title: '<img src="styles/legend/LINE_SPELL_5.png" /> LINE_SPELL'
            });
var format_pelabuhan_6 = new ol.format.GeoJSON();
var features_pelabuhan_6 = format_pelabuhan_6.readFeatures(json_pelabuhan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pelabuhan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pelabuhan_6.addFeatures(features_pelabuhan_6);
var lyr_pelabuhan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pelabuhan_6, 
                style: style_pelabuhan_6,
                interactive: true,
                title: '<img src="styles/legend/pelabuhan_6.png" /> pelabuhan'
            });
var format_perencana_SPELL_7 = new ol.format.GeoJSON();
var features_perencana_SPELL_7 = format_perencana_SPELL_7.readFeatures(json_perencana_SPELL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perencana_SPELL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perencana_SPELL_7.addFeatures(features_perencana_SPELL_7);
var lyr_perencana_SPELL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_perencana_SPELL_7, 
                style: style_perencana_SPELL_7,
                interactive: true,
                title: '<img src="styles/legend/perencana_SPELL_7.png" /> perencana_SPELL'
            });
var format_pusat_beban_8 = new ol.format.GeoJSON();
var features_pusat_beban_8 = format_pusat_beban_8.readFeatures(json_pusat_beban_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pusat_beban_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pusat_beban_8.addFeatures(features_pusat_beban_8);
var lyr_pusat_beban_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pusat_beban_8, 
                style: style_pusat_beban_8,
                interactive: true,
                title: '<img src="styles/legend/pusat_beban_8.png" /> pusat_beban'
            });
var format_pusat_pembangkit_9 = new ol.format.GeoJSON();
var features_pusat_pembangkit_9 = format_pusat_pembangkit_9.readFeatures(json_pusat_pembangkit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pusat_pembangkit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pusat_pembangkit_9.addFeatures(features_pusat_pembangkit_9);
var lyr_pusat_pembangkit_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pusat_pembangkit_9, 
                style: style_pusat_pembangkit_9,
                interactive: true,
                title: '<img src="styles/legend/pusat_pembangkit_9.png" /> pusat_pembangkit'
            });

lyr_google_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_indeks_bahaya_TSUNAMI_2.setVisible(true);lyr_indeks_bahaya_GEA_3.setVisible(true);lyr_indeks_bahaya_LONGSOR_4.setVisible(true);lyr_LINE_SPELL_5.setVisible(true);lyr_pelabuhan_6.setVisible(true);lyr_perencana_SPELL_7.setVisible(true);lyr_pusat_beban_8.setVisible(true);lyr_pusat_pembangkit_9.setVisible(true);
var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_indeks_bahaya_TSUNAMI_2,lyr_indeks_bahaya_GEA_3,lyr_indeks_bahaya_LONGSOR_4,lyr_LINE_SPELL_5,lyr_pelabuhan_6,lyr_perencana_SPELL_7,lyr_pusat_beban_8,lyr_pusat_pembangkit_9];
lyr_indeks_bahaya_TSUNAMI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_indeks_bahaya_GEA_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_indeks_bahaya_LONGSOR_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_LINE_SPELL_5.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', 'KML_FOLDER': 'KML_FOLDER', 'open': 'open', });
lyr_pelabuhan_6.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_perencana_SPELL_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_pusat_beban_8.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_pusat_pembangkit_9.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_indeks_bahaya_TSUNAMI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_indeks_bahaya_GEA_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_indeks_bahaya_LONGSOR_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_LINE_SPELL_5.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'tessellate': 'Range', 'KML_FOLDER': 'TextEdit', 'open': 'Range', });
lyr_pelabuhan_6.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_perencana_SPELL_7.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_pusat_beban_8.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_pusat_pembangkit_9.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_indeks_bahaya_TSUNAMI_2.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_indeks_bahaya_GEA_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_indeks_bahaya_LONGSOR_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_LINE_SPELL_5.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', 'KML_FOLDER': 'no label', 'open': 'no label', });
lyr_pelabuhan_6.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_perencana_SPELL_7.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_pusat_beban_8.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_pusat_pembangkit_9.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_pusat_pembangkit_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});