module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }

    const result = [];

    const u = number % 10;
    const t = Math.floor(number % 100 / 10);
    const h = Math.floor(number / 100);

    if (h > 0) {
        result.push([
            undefined, 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine'
        ][h]);

        result.push('hundred');
    }

    if (t === 1) {
        result.push([
            'ten'     , 'eleven',
            'twelve'  , 'thirteen',
            'fourteen', 'fifteen',
            'sixteen' , 'seventeen',
            'eighteen', 'nineteen'
        ][u]);
    } else {
        if (t > 1) {
            result.push([
                undefined, undefined,
                'twenty', 'thirty',
                'forty' , 'fifty',
                'sixty' , 'seventy',
                'eighty', 'ninety'
            ][t]);
        }
        if (u > 0) {
            result.push([
                undefined, 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine'
            ][u]);
        }
    }

    return result.join(' ');
}
