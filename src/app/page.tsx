"use client"
import Temperature from '@/components/temperature';
import Button from 'react-bootstrap/Button';
import "@/styles/weather.css"
import TodayForecast from '@/components/today-forecast';
import AirConditions from '@/components/air-conditions';
import DayForecast from '@/components/day-forecast';
import Search from '@/components/search';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const Weather =  () => {

  const [dataWeather, setDataWeather] = useState<WeatherResponse | undefined>(undefined);
  const [city,setCity] = useState<string>("Ho chi minh")
  const [dataForecast, setDataForecast] = useState<ForecastResponse | undefined> (undefined);


  useEffect(() => {

    const fetchWeatherCity = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=vi&appid=d26b87ca6c882f50c297a6fed54d2ecf`, {
        method: "GET",
        headers: {
          'Accept': 'application/json' // Thêm tiêu đề để yêu cầu JSON
        },
      });

      const data = await res.json();
      if (data.cod == 200) {
        setDataWeather(data)
      } else {
        toast.error("Không tìm thấy tỉnh/ thành phố")
      }
    }

    const fetchForecastCity = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=vi&appid=d26b87ca6c882f50c297a6fed54d2ecf`, {
        method: "GET",
        headers: {
          'Accept': 'application/json' // Thêm tiêu đề để yêu cầu JSON
        },
      });

      const data = await res.json();
      if (data.cod == 200) {
        setDataForecast(data)
      }
    }



    fetchWeatherCity()
    fetchForecastCity()
   
  }, [city])





  return (
    <>
      <div className='row' >
        <div className='col-12 col-md-8' >
          <div className="container-search__div" >
            <Search
              setCity = {setCity}
            />
          </div>
          <div className='container-temperature__div' >
            <Temperature
              dataWeather={dataWeather}
            />
          </div>
          <div className='container-today-forecast__div' >
            <TodayForecast 
            dataForecast = {dataForecast}
            />
          </div>
          <div className='air-conditions__div' >
            <AirConditions 
              dataWeather = {dataWeather}
            />
          </div>
        </div>
        <div className='col-12 col-md-4' >
          <div className='container-day-forecast__div' >
            <DayForecast 
               dataForecast = {dataForecast}
            />
          </div>
        </div>
      </div>





    </>
  );
}

export default Weather;