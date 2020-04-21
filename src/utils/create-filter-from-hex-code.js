import rgbToHsv from './rgb-to-hsv';

export default function createFilterFromHexCode(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    let hsv = rgbToHsv(r, g, b);

    hsv[0] *= 360;

    let filter = `hue-rotate(${hsv[0]}deg) saturate(${hsv[1]}) brightness(${hsv[2]})`;

    console.log(filter);

    return filter;
}
