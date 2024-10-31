import "@/styles/day-forecast.css"
import Image from 'next/image'
const DayForecast = () => {
    return (
        <>
            <div className="row row-ctn-day-forecast__div" >
                <p className="day-forecast-text__p" >Dự báo 5 ngày tiếp theo</p>
                <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
                <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
                <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
                <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
                <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
                              <div className="day-forecast-detail__div" >
                    <p className="day-text__p" >Thứ 2</p>
                    <div>
                        <Image
                            src="/images/sunny.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                        />
                        <span className="weather-text__span" >Nắng</span>
                    </div>
                    <p className="date-text__p" >22/06</p>
                </div>
            </div>
        </>
    )

}

export default DayForecast