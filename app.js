window.onload = init;

const api = {
    key: "bf25239da1d0d33d1981c39915158225",
    url:'http://api.openweathermap.org/data/2.5/' 
}

function init() {
    console.log("Dom is ready")
    var inputValue = document.querySelector('.inputData');
    
    fetch(`${api.url}weather?q=${inputValue.value}&appid=${api.key}`)
        .then((result) => {
            if (result.ok) {
                return result.json()
            }
        }).then((result) => {
            console.log(result)
        })
}
