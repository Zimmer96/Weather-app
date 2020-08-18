// const key = "415483eab5baa8074024cc448e1baa2e";
// const kelv = 273;

// function getWeather(lat,lon) {
//     let api = "http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}";
//     fetch(api)
//     .then( res => res.json())
//     .then( data =>{
//         console.log(data);
//     })
// }
// getWeather();

// const api = {
//     key: "415483eab5baa8074024cc448e1baa2e",
//     baseurl: "https://api.openweathermap.org/data/2.5/"
// }

let key = "415483eab5baa8074024cc448e1baa2e";
 let city = "london";
// const searchBox = document.getElementById("search-box");
// searchBox.addEventListener("keypress",function () {
//     console.log(searchBox.value);
// })

 
    const button = document.getElementById("button");
button.addEventListener("click",function () {
    const searchBox = document.getElementById("search-box");
    const city = searchBox.value;
    // document.getElementById("name").innerHTML = city;
    getResults(city);
    
})


function getResults(city) {
   
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(resp => resp.json())
    .then( data => {
        
        console.log(data.weather[0].icon);
        const name = data.name;
        const temp = data.main.temp;
        const description  = data.weather[0].main;
        let iconId = data.weather[0].icon;
        
                let img = document.getElementById("icon");
         img.src = `images/icons/${iconId}.png`;
        ;
        
        // var img = document.createElement("img");
        // img.src = `images/icons/${iconId}.png`;
        document.getElementById("name").innerText = name;
        document.getElementById("temp").innerText = parseInt(temp-273) ;
        document.getElementById("desc").innerText = description ;

    })


}




