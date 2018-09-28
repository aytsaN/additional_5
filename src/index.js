module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    let arrForBrackets = [arr[0]];
    arr.shift();

    arr.forEach(function(item, i, array) {
        compare(item);
    });

    function compare(bracket) {
        let isFind = false;
        bracketsConfig.forEach(function(item, i, array) {
            if (bracket === item[1] && arrForBrackets[arrForBrackets.length - 1] === item[0]) {
                isFind = true;
                arrForBrackets.pop();
            } else if (i === array.length - 1 && !isFind) {
                arrForBrackets.push(bracket);
            }
        });
    }

    if (arrForBrackets.length) {
        return false;
    }
    return true;
}