import "@/styles/today-forecast.css"
import Image from 'next/image'
const TodayForecast = () => {
    return (
        <>
            <div className="row ctn__forecast">
                <p className="forecast-text__p" >Dự báo trong ngày</p>
                <div className="col-2" >
                    <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
                <div className="col-2" >
                <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/cloudy.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
                <div className="col-2" >
                <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/rain.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
                <div className="col-2" >
                <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/cloudy-sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
                <div className="col-2" >
                <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/rain.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
                <div className="col-2" >
                <div className="container-detail__div" >
                        <p className="time__p">6:00 AM</p>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <p className="temperature-forecast__div" >20°</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodayForecast