interface ForecastResponse {
    cod: number,
    message: number,
    cnt: number,
    list:ForecastItemResponse[],
    city: {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    }
}