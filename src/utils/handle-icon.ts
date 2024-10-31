

export const HandleIcon = (weather?:WeatherResponse) => {
    if (weather === undefined) {
        return "/images/cloudy-sunny.png"; // Hoặc có thể trả về một giá trị khác phù hợp, như 'Chưa có dữ liệu'
    }

    const celsius: number = weather.main.temp - 273.15;
    if (weather.weather[0].main == "Rain") {
        return "/images/rain.png";
    }
    if (weather.clouds.all === 0 && celsius>20 ) {
        return "/images/sunny.png";
    }
    if (weather.clouds.all > 80 && celsius<20 ) {
        return "/images/cloudy.png";
    } 
 
    if (weather.clouds.all < 80 && weather.clouds.all > 0 && celsius > 15 && celsius <30 ) {
        return "/images/cloudy-sunny.png";
    }
    return "/images/cloudy-sunny.png";
}