import "@/styles/air-conditions.css"
const AirConditions = () => {
    return (
        <>
            <div className="row row-ctn-conditions__div" >
                <p className="air-conditions-text__p" >Điều kiện không khí</p>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-temperature-three-quarters"></i>
                        <span> Nhiệt độ thực tế</span>
                    </p>
                    <p className="temperature-real-feel__p" >20°</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-droplet"></i>
                        <span> Độ ẩm</span>
                    </p>
                    <p className="temperature-real-feel__p" >60%</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-wind"></i>
                        <span> Gió</span>
                    </p>
                    <p className="temperature-real-feel__p" >20°</p>
                </div>
                <div className="col-md-6 detail-condititions__div" >
                    <p className="real-feel__p"><i className="fa-solid fa-eye"></i>
                        <span> Tầm nhìn</span>
                    </p>
                    <p className="temperature-real-feel__p" >20°</p>
                </div>
            </div>
        </>
    )
}

export default AirConditions