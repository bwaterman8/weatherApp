window.addEventListener('load', ()=> {
    let weatherLocation = document.querySelector('.the_location')
    let weatherIcon = document.querySelector('.icon')
    let weatherTemp = document.querySelector('.the_temp')
    let weatherStyle = document.querySelector('.the_weather')

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=43214,us&units=imperial&appid=02ed7e7d8b698b88dab20bc8f8e848ad`)
    .then(respond => respond.json())
    .then(data => {
        const {name, main} = data
        weatherLocation.textContent = name
        weatherTemp.textContent = main.temp
        let weatherDesc = data['weather'][0]['description']
        weatherStyle.textContent = weatherDesc
    })
})
