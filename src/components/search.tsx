"use client"
import { useMyContext } from "@/MyContext";
import "@/styles/search.css"
import { tinhThanh } from "@/utils/tinhthanh";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Select from 'react-select'
import { toast } from "react-toastify";
interface IProps {
    setCity: (city: string) => void
}

const Search = (props: IProps) => {
    const { sharedVar, setSharedVar } = useMyContext();

    const { setCity } = props
    const [options, setOptions] = useState(tinhThanh())
    const [selectOption, setSelectOption] = useState<{ value: string; label: string }>({
        value: "Thành phố Hồ Chí Minh",
        label: "Tìm kiếm quận / thành phố"
    })

    const handleChange = (option: { value: string; label: string } | null) => {
        if (option == null) {
            toast.error("Không tìm thấy Quận/Thành phố")
        } else {
            setSelectOption(option);
            setCity(option.value)
        }

        console.log("vao day")

    };



    return (
        <>

            <div className="col ctn-search-item__div" >
                <Button variant="light" className="tab__Button" ><i className="fa-solid fa-bars"
                onClick={()=>{setSharedVar(true)}}
                ></i></Button>
                <i className="fa-solid fa-magnifying-glass-location icon-search__i"></i>

                <Select options={options}
                    className="select-city__Select"
                    placeholder="Quận/Thành phố"
                    value={selectOption}
                    onChange={handleChange}
                />
            </div>

        </>
    )

}
export default Search
