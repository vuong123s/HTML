/*
You have a table with all available goods in the store. The data is 
represented as a list of objects

Your mission here is to find the TOP most expensive goods. The amount 
we are looking for will be given as a first argument and the whole 
data as the second one
*/

function biggerPrice(limit, data) {
    var x = data.sort(function(a,b){
        return b.price - a.price
    })
    return x.slice(0, limit)
}

biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
])