fetch(`http://api.openweathermap.org/data/2.5/weather?zip=43214,us&appid=02ed7e7d8b698b88dab20bc8f8e848ad`)
.then(respond => respond.json())
.then(data => console.log(data))