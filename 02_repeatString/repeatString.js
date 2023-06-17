const repeatString = function(string, int) {
    let newString = "";
    if (int < 0)
        return "ERROR";
    for(let i = 0; i < int; i++){
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
