"use client"
import "@/styles/temperature.css"
import Image from 'next/image'
import {HandleTemperature} from '@/utils/handle-temperature';
import { HandleIcon } from "@/utils/handle-icon";
interface IProps {
    dataWeather:WeatherResponse|undefined;
}

const Temperature = (props:IProps) => {
    const {dataWeather} = props
    return (
        <>
           
                <div className="col-6 col-sm-6 col-md-6" >
                    <div  className='container-inf-temperature__div'>
                        <div className="location__div" >
                            <p className="location__p" >{dataWeather?.name}</p>
                            <p className="chance-rain_p" >Độ ẩm: {dataWeather?.main.humidity}%</p>
                        </div>
                        <div className="temperature__div" >
                            <p className="temperature_p" >{HandleTemperature(dataWeather?.main.temp)}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6" >
                    <div className='container-imge__div' >
                        <Image
                            src={HandleIcon(dataWeather?.weather[0].icon)}
                            alt="Picture of the author"
                            width={150}
                            height={150}
                        />
                    </div>

                </div>

        </>
    )
}

export default Temperature