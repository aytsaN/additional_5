module.exports = function check(str, bracketsConfig) {

    var tempStr='';

    for (let i = 0; i < bracketsConfig.length; ) {

        if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
            if (str[0] == bracketsConfig[i][0]) {
                if (tempStr[tempStr.length - 1] == bracketsConfig[i][0]) {
                    tempStr = tempStr.substring(0, tempStr.length - 1)
                    str = str.substr(1);
                    if (str == '' && tempStr == '') {
                        return true;
                    }
                    i=0;
                }
                else {
                    tempStr += str[0];
                    str = str.substr(1);
                    if (str.length == 0) {
                        return false;
                    }
                    i = 0;
                }
            }

        }

            if (str[0] == bracketsConfig[i][0]&&str[0]!=bracketsConfig[i][1]) {
                tempStr += str[0];
                str = str.substr(1);
                if (str.length == 0) {
                    return false;
                }
                i = 0;
            }

            else if (str[0] == bracketsConfig[i][1]) {
                if (tempStr[tempStr.length - 1] == bracketsConfig[i][0]) {
                    tempStr = tempStr.substring(0, tempStr.length - 1);
                    str = str.substr(1);
                    if (str.length == 0 && tempStr.length == 0) {
                        return true;
                    }
                    i = 0;
                }
                else {
                    return false;
                }
            }
            else {
                i++;
            }
    }
        return true;
}
