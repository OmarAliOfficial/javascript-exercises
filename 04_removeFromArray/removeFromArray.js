const removeFromArray = function(arr, ele) {
    let newArr = arr;
    for(let i = 0; i < arguments.length; i++){ 
        newArr = newArr.filter(item => item !== arguments[i])
    }  
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
