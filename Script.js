let form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    let height1 = parseInt(document.querySelector('#height').value)
    let weight1 = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')
    let resultInfo = document.querySelector('#resultsInfo')

    // result.style.border = "2px solid black"

    if(height1 === ''|| height1 < 0 || isNaN(height1)){
        result.innerHTML = "Please give Valid Height"
    }
    else if(weight1 === ''|| weight1 <= 0|| isNaN(weight1)){
        result.innerHTML = "Please give Valid Weight"
    }
    else{
        result.style.display = 'block'
        resultInfo.style.display = 'block'
        let res= (weight1/((height1*height1)/10000)).toFixed(2)
        result.innerHTML= res;
        if(res < 18.6)
            resultInfo.innerHTML = "Underweight"
        else if(res > 24.9)
            resultInfo.innerHTML = "OverWeight"
        else
            resultInfo.innerHTML = "Normal range"
    }

})