function myEach(orgArray, callback) {
    Object.values(orgArray).forEach(values => {
        return callback(values)
    })
    return orgArray
}

function myMap(orgArray, callback) {
    let newArray = Object.values(orgArray).map(callback)
    return newArray
}
function myReduce(collection, callback, acc) {
    const total = Object.values(collection)
    if (acc != undefined) {
    return total.reduce(callback, acc)
    } else 
    return total.reduce(callback)
} 
function myFind(collection, predicate) {
    if (predicate != undefined) {
        return collection.find(predicate) 
    }
}

function myFilter(collection, predicate) {
    if (predicate != undefined) {
        return Object.values(collection).filter(predicate)
    }
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

function myLast(array, n){
    if (n === undefined) {
        return array[array.length - 1]
    } else {
        return array.slice(-n)
    }   
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}