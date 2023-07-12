let $ = document

const firstValue = $.querySelector('.C')
const secondValue = $.querySelector('.F')
const converter = $.querySelector('#converter') //input
const result = $.querySelector('.result')
const convertButton = $.querySelector('.convertButton')
const resetButton = $.querySelector('.resetButton')
const changeButton = $.querySelector('.changeButton')

function convert () {
    // console.log('Convert')
    if (converter.value === '') {
        result.innerHTML = 'insert correct value'
        result.style.color = '#993300'
    } else {
        if (firstValue.innerHTML === '°C') { // C  to F
            let resultValue = (converter.value  * 1.8) + 32
            result.style.color = 'rgb(255, 255, 102)'
            result.innerHTML = converter.value + '°C To ' + resultValue + '°F'
        } else {
            let resultValue = (converter.value -32) * 5 / 9
            result.style.color = 'rgb(255, 255, 102)'
            result.innerHTML = converter.value + '°F To ' + resultValue.toFixed(2) + '°C'
        }
    }
}

function reset () {
    // console.log('Reset') test
    result.innerHTML = ''
    // converter.setAttribute('value', '') // converter.value = ''
    // console.log(converter.getAttribute('value'))
    converter.value = '' //input
}

function swap () {
    // console.log('Change')
    if (firstValue.innerHTML === '°C') {
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        converter.setAttribute('placeholder', '°F')
        document.title = 'SalzLearn| Js | °F to °C'
    } else {
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        converter.setAttribute('placeholder', '°C')
        document.title = 'SalzLearn| Js | °C to °F'

    } 
}

convertButton.addEventListener('click', convert)
resetButton.addEventListener('click', reset)
changeButton.addEventListener('click', swap)