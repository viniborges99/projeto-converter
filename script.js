
const button = document.querySelector('#button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.53
const bitcoin =116281.25

const convertValues = () => {
    const valorReal = document.getElementById('valor').value
    const realValueText = document.getElementById('real-value')
    const dolarValueText = document.getElementById('dolar-value')
    
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
    }).format(valorReal);

    if(select.value ==='US$ Dólar americano' ){
        dolarValueText.innerHTML =new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD",
        }).format(valorReal / dolar);
    }else if(select.value === '€ Euro'){
        dolarValueText.innerHTML =new Intl.NumberFormat("de-De",{
            style:"currency",
            currency:"EUR",
        }).format(valorReal / euro);
    }else{
        dolarValueText.innerHTML= valorReal / bitcoin
    
    }


    //jeito novo de formatar o dinheiro

}

const changeCurrency=()=>{
    const currencyName = document.getElementById('currency-name')
    const image = document.getElementById('img')
 

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        image.src="assets/img/estados-unidos (1) 1.svg"
    }else if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        image.src="assets/img/euro.svg"
    }else{
        currencyName.innerHTML = 'Bitcoin'
        image.src="assets/img/bitcoin.png"
    }
    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)