"use client"
import "@/styles/search.css"
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
interface IProps {
    setCity:(city:string)=>void
}

const Search = (props:IProps) => {
    
    const {setCity} = props
    const [search, setSearch] = useState<string> ("");

    const handleSearch = () => {
        setCity(search)
    }

    return (
        <>

            <div className="search__div" >
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass-location"></i>
                    </InputGroup.Text>
                    <Form.Control
                    className="search__Form"
                        placeholder="Tên thành phố/tỉnh"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={search}
                        onChange={(e)=> {setSearch(e.target.value)}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                // Gọi hàm xử lý khi nhấn Enter
                                handleSearch();
                            }
                        }}
                    />
                </InputGroup>
            </div>

        </>
    )

}
export default Search