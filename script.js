// COTAÇÕES DE MOEDAS DO DIA
const USD = 4.98
const EUR = 5.61
const GBP = 6.61

// OBTENDO OS ELEMENTOS DO HTML
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

console.log("JavaScript carregado com sucesso!")

// MANIPULAÇÃO DO INPUT AMOUNT
amount.addEventListener("input", () => {

    // EXPRESSÃO REGEX
    const hasCharacterRegex = /\D+/g

    // REMOVE TUDO QUE NÃO FOR NÚMERO
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// CAPTA O EVENTO DE ENVIO DO FORMULÁRIO
form.onsubmit = (event) => {

    // IMPEDE A PÁGINA DE RECARREGAR
    event.preventDefault()

    // VERIFICA A MOEDA SELECIONADA
    switch (currency.value) {

        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break

        default:
            alert("Selecione uma moeda.")
    }
}

// FUNÇÃO PARA CONVERTER O VALOR
function convertCurrency(amount, price, symbol) {

    try {

        // VERIFICA SE FOI DIGITADO UM VALOR
        if (amount === "") {
            alert("Digite um valor para converter.")
            return
        }

        // EXIBE A COTAÇÃO DA MOEDA
        description.textContent = `${symbol} 1 = R$ ${price.toFixed(2)}`

        // CALCULA O TOTAL
        const total = Number(amount) * price

        // EXIBE O RESULTADO FORMATADO
        result.textContent = formatCurrencyBRL(total)

        // MOSTRA O FOOTER
        footer.classList.add("show-result")

    } catch (error) {

        // REMOVE O RESULTADO CASO OCORRA ERRO
        footer.classList.remove("show-result")

        console.error("Erro na conversão:", error)

        alert("Não foi possível converter. Tente novamente.")
    }
}

// FORMATAÇÃO PARA REAL BRASILEIRO

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " Reais"
}
    
