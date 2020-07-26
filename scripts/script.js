// (Math.PI * QUANTITY)*Math.pow(INCHES/2, 2)

const quantity1 = document.getElementById('quantity-1')
const quantity2 = document.getElementById('quantity-2')
const measurement1 = document.getElementById('measurement-1')
const measurement2 = document.getElementById('measurement-2')
const answer = document.getElementById('answer')

// quantity + measurement
// function myPizza(q, m) {
//     console.log((Math.PI * q) * Math.pow(m / 2, 2))
//     console.log('trunc: ' + Math.trunc((Math.PI * q) * Math.pow(m / 2, 2)) + " in\xB2")
// }

function pizzaCalc(q1, m1, q2, m2) {
    q1 = +quantity1.value;
    q2 = +quantity2.value;
    m1 = +measurement1.value;
    m2 = +measurement2.value;

    // console.log(q1, q2, m1, m2)

    // myPizza(q1, m1)
    // myPizza(q2, m2)

    pizza1 = (Math.PI * q1) * Math.pow(m1 / 2, 2)
    pizza2 = (Math.PI * q2) * Math.pow(m2 / 2, 2)

    // console.log((Math.PI * q1) * Math.pow(m1 / 2, 2) > (Math.PI * q2) * Math.pow(m2 / 2, 2))
    // console.log("(by " + ((Math.PI * q1) * Math.pow(m1 / 2, 2) - (Math.PI * q2) * Math.pow(m2 / 2, 2)) + ' inches.')
    // console.log(`(by ${Math.trunc((Math.PI * q1) * Math.pow(m1 / 2, 2) - (Math.PI * q2) * Math.pow(m2 / 2, 2))} inches.)`)



    if (pizza1 > pizza2) {
        answer.innerText = `Yes, by ${Math.trunc(pizza1 - pizza2)} inches`
    } else if (pizza1 == pizza2) {
        answer.innerText = `No, they're the same`
    } else {
        answer.innerText = `No, by ${Math.trunc(pizza2 - pizza1)} inches`
    }





    // console.log(pizza1 > pizza2)
    // console.log((Math.PI * q1) * Math.pow(m1 / 2, 2))
    // console.log('trunc: ' + Math.trunc((Math.PI * q1) * Math.pow(m1 / 2, 2)) + " in\xB2")

    // console.log((Math.PI * q2) * Math.pow(m2 / 2, 2))
    // console.log('trunc: ' + Math.trunc((Math.PI * q2) * Math.pow(m2 / 2, 2)) + " in\xB2")

}