// (Math.PI * QUANTITY)*Math.pow(INCHES/2, 2)

function myPizza(quantity, inches) {
    console.log((Math.PI * quantity) * Math.pow(inches / 2, 2))
    console.log('trunc: ' + Math.trunc((Math.PI * quantity) * Math.pow(inches / 2, 2)) + " in\xB2")
}