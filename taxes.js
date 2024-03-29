



const taxes = (current, broker, terminal, transport, nds, tax, first, second, third, fourth) => {


    current = parseFloat(current,)
    broker = parseFloat(broker,)
    terminal = parseFloat(terminal,)
    transport = parseFloat(transport,)
    nds = parseFloat(nds,)
    tax = parseFloat(tax,)
    first = parseFloat(first,)
    second = parseFloat(second,)
    third = parseFloat(third,)
    fourth = parseFloat(fourth,)

    const brokerTerminalCurrent = (broker + terminal) / current;
    const transportCurrent = transport / current;
    const ndsCurrent = nds / current;
    const taxCurrent = tax / current;
    const totalAmount = first + second + third + fourth;
    const firstPart = first / totalAmount;
    const secondPart = second / totalAmount;
    const thirdPart = third / totalAmount;
    const fourthPart = fourth / totalAmount;
    const firstBrokerTerminal = brokerTerminalCurrent * firstPart;
    const firstTransport = transportCurrent * firstPart;
    const firstNds = ndsCurrent * firstPart;
    const firstTax = taxCurrent * firstPart;
    const secondBrokerTerminal = brokerTerminalCurrent * secondPart;
    const secondTransport = transportCurrent * secondPart;
    const secondNds = ndsCurrent * secondPart;
    const secondTax = taxCurrent * secondPart;
    const thirdBrokerTerminal = brokerTerminalCurrent * thirdPart;
    const thirdTransport = transportCurrent * thirdPart;
    const thirdNds = ndsCurrent * thirdPart;
    const thirdTax = taxCurrent * thirdPart;
    const fourthBrokerTerminal = brokerTerminalCurrent * fourthPart;
    const fourthTransport = transportCurrent * fourthPart;
    const fourthNds = ndsCurrent * fourthPart;
    const fourthTax = taxCurrent * fourthPart;

    alert(`Брокер + терминал 1 : ${firstBrokerTerminal};
    Логистика 1 : ${firstTransport}:
    Ндс 1 : ${firstNds};
    Пошлина 1 : ${firstTax};
    Брокер + терминал 2 :${secondBrokerTerminal};
    Логистика 2 : ${secondTransport};
    Ндс 2 : ${secondNds};
    Пошлина 2 : ${secondTax};
    Брокер + терминал 3 :${thirdBrokerTerminal};
    Логистика 3 : ${thirdTransport};
    Ндс 3 : ${thirdNds};
    Пошлина 3 : ${thirdTax};
    Брокер + терминал 4 : ${fourthBrokerTerminal};
    Логистика 4 : ${fourthTransport};
    Ндс 4 : ${fourthNds};
    Пошлина 4 : ${fourthTax}; `)

}

const current = document.getElementById('current');
const broker = document.getElementById('broker');
const terminal = document.getElementById('terminal');
const transport = document.getElementById('transport');
const nds = document.getElementById('nds');
const tax = document.getElementById('tax');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const calc = document.getElementById('calc-button');


calc.addEventListener('click', () => {
    taxes(current.value, broker.value, terminal.value, transport.value, nds.value, tax.value, first.value, second.value, third.value, fourth.value)

}
)

