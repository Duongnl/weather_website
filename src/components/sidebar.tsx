"use client"
import Image from 'next/image'
import "@/styles/sidebar.css"
import { useMyContext } from '@/MyContext';
const Sidebar = () => {
    const { sharedVar, setSharedVar } = useMyContext();

    return (
        <>
                {sharedVar && <div className="overlay" onClick={() => { setSharedVar(false) }}></div>}
            <div className={`col-1 col-sidebar__div ${sharedVar ? `open` : ``}`} >
                <div className="container-sidebar__div" >
                    <Image className='img-um__Image'
                        src="/images/umba.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                    <div className='select-weather__div' >
                        <p className='icon-weather__p' ><i className="fa-solid fa-cloud-sun-rain"></i></p>
                        <p className='select-weather-text__p' >Thời tiết</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar