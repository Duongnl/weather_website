import "@/styles/day-forecast.css"
import { handleBeforeDay, handleDayOfWeek, handleFomart } from "@/utils/handle-day-time"
import { findMostFrequentElement, HandleIconForecast } from "@/utils/handle-icon"
import { HandleTemperature } from "@/utils/handle-temperature"
import Image from 'next/image'
import { useEffect, useState } from "react"
interface IProps {
    dataForecast: ForecastResponse | undefined
}


const DayForecast = (props: IProps) => {
    const { dataForecast } = props
    const [forecasts, setForecasts] = useState<ForecastHandleResponse[]>([])

    useEffect(() => {


        const groupedByDate: { [key: string]: ForecastItemResponse[] } = {};

        dataForecast?.list.forEach(forec => {
            const date = forec.dt_txt.split(" ")[0]; // Lấy ngày từ chuỗi (phần trước dấu cách)
            if (handleBeforeDay(date) == false) {
                if (!groupedByDate[date]) {
                    groupedByDate[date] = []; // Khởi tạo mảng nếu chưa có
                }
                groupedByDate[date].push(forec); // Thêm thời gian vào mảng tương ứng
            }

        })

        // Chuyển đổi các mảng nhóm thành biến
        const dayTimeArrays = Object.values(groupedByDate);
        let list: ForecastHandleResponse[] = []
        dayTimeArrays.forEach(dayTime => {
            let temp = 0
            let feels_like = 0
            let humidity = 0
            let pop = 0
            let visibility = 0
            let speed = 0
            let all = 0
            let forecast: ForecastHandleResponse = {
                date: dayTime[0].dt_txt.split(" ")[0],
                icon:0,
                temp: 0,
                feels_like: 0,
                humidity: 0,
                pop: 0,
                visibility: 0,
                speed: 0,
                all: 0
            };
            let iconList:number[] = []
            dayTime.forEach(fo => {
                temp += fo.main.temp
                feels_like += fo.main.feels_like
                humidity += fo.main.humidity
                pop += fo.pop
                visibility += fo.visibility
                speed += fo.wind.speed
                all += fo.clouds.all
                iconList.push( parseInt(fo.weather[0].icon, 10) )
            })
            forecast.icon = findMostFrequentElement(iconList)
            forecast.temp = temp / dayTime.length
            forecast.feels_like = feels_like / dayTime.length
            forecast.humidity = humidity / dayTime.length
            forecast.pop = pop / dayTime.length
            forecast.visibility = visibility / dayTime.length
            forecast.speed = speed / dayTime.length
            forecast.all = all / dayTime.length


            list.push(forecast)
        })
        setForecasts(list)
        console.log("forecasts >>> ", forecasts)

    }, [dataForecast])

    return (
        <>
            <div className="row row-ctn-day-forecast__div" >
                <p className="day-forecast-text__p" >Dự báo các ngày tiếp theo</p>
                {forecasts?.map((forecast, index) => (
                    <>
                        <div className="row day-forecast-detail__div" key={index} >
                          
                                <div className="col-4" >
                                    <p className="day-text__p" >{handleDayOfWeek(forecast.date)}</p>
                                </div>
                                <div className="col-4" >
                                    <div>
                                        <Image
                                            src={HandleIconForecast(forecast.icon)}
                                            alt="Picture of the author"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="weather-text__span" >{HandleTemperature(forecast.temp)}</span>
                                    </div>
                                </div>
                                <div className="col-4" >
                                    <p className="date-text__p" >{handleFomart(forecast.date)}</p>
                                </div>
                       


                        </div>
                    </>
                ))}

            </div>
        </>
    )

}

export default DayForecast