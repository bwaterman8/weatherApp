window.addEventListener('load', ()=> {
    let weatherLocation = document.querySelector('.the_location')
    let weatherIcon = document.querySelector('.icon')
    let weatherTemp = document.querySelector('.the_temp')
    let weatherStyle = document.querySelector('.the_style')


    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=43214,us&units=imperial&appid=02ed7e7d8b698b88dab20bc8f8e848ad`)
    .then(respond => respond.json())
    .then(data => {
        console.log(data);
        const {name} = data
        weatherLocation.textContent = name
        const {temp} = data.main
        weatherTemp.textContent = temp
        const {style} = data.weather
        weatherStyle.textContent = style
    })
})
