// Equation: (Math.PI * QUANTITY)*Math.pow(INCHES/2, 2)

const quantity1 = document.getElementById('quantity-1')
const quantity2 = document.getElementById('quantity-2')
const measurement1 = document.getElementById('measurement-1')
const measurement2 = document.getElementById('measurement-2')
const answer = document.getElementById('answer')
const formula = document.getElementById('formula')

function pizzaCalc(q1, m1, q2, m2) {
    q1 = +quantity1.value;
    q2 = +quantity2.value;
    m1 = +measurement1.value;
    m2 = +measurement2.value;

    if (q1, q2, m1, m2) {
        pizza1 = (Math.PI * q1) * Math.pow(m1 / 2, 2)
        pizza2 = (Math.PI * q2) * Math.pow(m2 / 2, 2)

        if (pizza1 > pizza2) {
            answer.innerText = `Yes, by ${Math.round(pizza1 - pizza2)} inches`
        } else if (pizza1 == pizza2) {
            answer.innerText = `No, they're the same`
        } else {
            answer.innerText = `No, by ${Math.round(pizza2 - pizza1)} inches`
        }

        document.getElementById('formula-title').style.display = 'block'
        document.getElementById('formula').style.display = 'block'
        formula.innerText = `Area 1 = ${q1}\u03C0(${m1}/2)\xB2 = ${Math.round(pizza1)} in\xB2 \n Area 2 = ${q2}\u03C0(${m2}/2)\xB2 = ${Math.round(pizza2)} in\xB2`

    } else {
        answer.innerText = `Please fill out all inputs`
    }
}

function updateGrammar() {
    q1 = +quantity1.value;
    q2 = +quantity2.value;
    m1 = +measurement1.value;
    m2 = +measurement2.value;

    if (q1 > 1) {
        document.getElementById('grammar-1').innerText = 'Are'
        document.getElementById('grammar-2').innerText = ' inch pizzas,'

    } else {
        document.getElementById('grammar-1').innerText = 'Is'
        document.getElementById('grammar-2').innerText = ' inch pizza,'
    }
    if (q2 > 1) {
        document.getElementById('grammar-3').innerText = 'inch pizzas?'

    } else {
        document.getElementById('grammar-3').innerText = 'inch pizza?'
    }
}

function reset() {
    quantity1.value = quantity2.value = measurement1.value = measurement2.value = answer.innerText = '';
    document.getElementById('formula-title').style.display = document.getElementById('formula').style.display = 'none'
}