
const button = document.querySelector('#button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9

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
    }else{
        dolarValueText.innerHTML =new Intl.NumberFormat("de-De",{
            style:"currency",
            currency:"EUR",
        }).format(valorReal / euro);
    }


    //jeito novo de formatar o dinheiro

}

const changeCurrency=()=>{
    const currencyName = document.getElementById('currency-name')
    const image = document.getElementById('img')
 

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        image.src="assets/img/estados-unidos (1) 1.svg"
    } 

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        image.src="assets/img/euro.svg"
    }  
    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)