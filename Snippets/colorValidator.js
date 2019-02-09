const colorValidator = (color,defult_color="red")=>{
    if (typeof color != "string") {
        return defult_color;
    }
    //color is to validate
    //defult_color is optional in case the color don't pass the proves
    const rgbRegexValidator = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
    const hexRegexValidator = /^[#]?[0-9A-Fa-f]{3,8}$/;
    const colorNameRegexValidator = /^\s{0,}[a-zA-Z]{0,50}$/;
    if (rgbRegexValidator.test(color)) {
        return color;
    } else if (hexRegexValidator.test(color)) {
        if (color.indexOf("#") == 0) {
            return color;
        } else {
            return "#" + color;
        }
    } else if (colorNameRegexValidator.test(color)) {
        color = color.replace(/\s/g, "");
        return color;
    } else {
        return defult_color;
    }
}

const rgbMine = 'rgb(255, 0, 255)';
const hexMine = '#ff00ff55';
const colorName = 'white'
colorValidator(hexMine)
