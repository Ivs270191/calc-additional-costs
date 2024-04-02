const calcAliments = (penalty, days) => {
    penalty = parseFloat(penalty,)
    days = parseFloat(days,)
    result = penalty * 0.01 * days;

    alert(result)
}

const penalty = document.getElementById('penalty');
const days = document.getElementById('days');
const calcAli = document.getElementById('calc-ali-button');

calcAli.addEventListener('click', () => {
    calcAliments(penalty.value, days.value)

}
)