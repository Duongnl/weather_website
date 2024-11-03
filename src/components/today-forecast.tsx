import "@/styles/today-forecast.css"
import { formatTo12HourTime } from "@/utils/handle-day-time"
import { HandleIcon } from "@/utils/handle-icon"
import { HandleTemperature } from "@/utils/handle-temperature"
import Image from 'next/image'
import { useEffect, useState } from "react"

interface IProps {
    dataForecast: ForecastResponse | undefined
}

const TodayForecast = (props: IProps) => {
    const { dataForecast } = props
    const [forecasts, setForecasts] = useState<ForecastItemResponse[]>([])

    useEffect(() => {
        function isAfterNow(dateString: string): boolean {
            const inputDate = new Date(dateString);
            const now = new Date();

            return inputDate > now;
        }
        const handleForecast = () => {
            const list: ForecastItemResponse[] = [];
            dataForecast?.list.forEach(forecast => {
                if (isAfterNow(forecast.dt_txt) && list.length < 6) {
                    list.push(forecast);
                }
            });
            setForecasts(list);
        };
        handleForecast()
    }, [dataForecast])


    return (
        <>
            <div className="row ctn-item-today-forecast__div">
            <p className="forecast-text__p" >Dự báo thời gian tiếp theo</p>
                {forecasts?.map((forecast,index) => (<>
                    <div className="col-2" key={index} >
                        <div className="container-detail__div" >
                            <p className="time__p">{formatTo12HourTime(forecast.dt_txt)}</p>
                            <Image
                                src={ HandleIcon(forecast.weather[0].icon) }
                                alt="Picture of the author"
                                width={50}
                                height={50}
                            />
                            <p className="temperature-forecast__div" >{HandleTemperature(forecast.main.temp)}</p>
                        </div>
                    </div>
                </>))}

            </div>
              
        </>
    )
}
export default TodayForecast