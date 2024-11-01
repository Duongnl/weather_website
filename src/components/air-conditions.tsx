import "@/styles/air-conditions.css"
import { HandleTemperature } from "@/utils/handle-temperature";
import { HandleVisibility } from "@/utils/handle-visibility";
interface IProps {
    dataWeather:WeatherResponse|undefined;
}
const AirConditions = (props:IProps) => {
    const {dataWeather} = props
    return (
        <>
            <div className="row row-ctn-conditions__div" >
                <p className="air-conditions-text__p" >Điều kiện không khí</p>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-temperature-three-quarters"></i>
                        <span> Cảm giác như</span>
                    </p>
                    <p className="temperature-real-feel__p" >{HandleTemperature(dataWeather?.main.feels_like)}</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-droplet"></i>
                        <span> Độ ẩm</span>
                    </p>
                    <p className="temperature-real-feel__p" >{dataWeather?.main.humidity}%</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-wind"></i>
                        <span> Gió</span>
                    </p>
                    <p className="temperature-real-feel__p" >{dataWeather?.wind.speed} m/s</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-eye"></i>
                        <span> Tầm nhìn</span>
                    </p>
                    <p className="temperature-real-feel__p" >{HandleVisibility(dataWeather?.visibility)}</p>
                </div>
            </div>
        </>
    )
}

export default AirConditions