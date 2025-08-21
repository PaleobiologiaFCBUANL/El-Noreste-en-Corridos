var size = 0;
var placement = 'point';
function categories_Corridos_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Amor':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(137,90,140,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(215,141,220,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 7.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(137,90,140,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(137,90,140,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Caballos':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(87,67,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(186,143,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/sport_horse_racing.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Contrabando':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(162,167,167,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_police.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cultura':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(36,87,51,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(111,191,135,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/tourist_beach.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Desamor':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(105,111,147,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(164,172,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 7.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(105,111,147,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(105,111,147,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.2 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          displacement: [0, 0],
                                          stroke: new ol.style.Stroke({color: 'rgba(86,91,120,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Enfrentamiento':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(111,40,40,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(219,78,78,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.025862202735531394,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/skull.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Héroe regional':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(140,133,82,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(233,222,136,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/WindRose_01.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Social':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(115,70,125,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(189,115,206,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/tourist_theatre.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Valor':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(114,79,23,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}), fill: new ol.style.Fill({color: 'rgba(244,169,49,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/poi_mine.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(90,231,69,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Corridos_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Tematica");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Corridos_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
