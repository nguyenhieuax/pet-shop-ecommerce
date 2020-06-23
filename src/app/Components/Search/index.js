import React, { useState, useRef } from 'react'
import removeAccents from '../../utils/removeAccents'
import slugify from 'slugify'
export default function Search(props) {

    const inputRef = useRef(null);

    const [searchedData, setSearchedData] = useState([])

    const showSuggestSearch = async (value) => {


        let _value = await slugify(value.replace(/\s/g, '').toLowerCase());
        console.log('value nhap vao ----------', slugify(_value))

        let listProduct = props.data;

        let _removeSpaceList = await listProduct.map(item => [slugify(item.name.replace(/\s/g, '').toLowerCase()), item.name, item]);


        let searchedData = await _removeSpaceList.filter(item => item[0].includes(_value));

        setSearchedData(searchedData);
        console.log('searched data ----------------', searchedData)

        props.searchedData(!value ? [] : searchedData);
        props.inputWidth(inputRef.current.offsetWidth);


    }

   
    
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
                {/* <div className="hero__search__categories">
              All Categories
              <span className="arrow_carrot-down" />
            </div> */}
                <input ref = {inputRef} id="inputSearch" style={{ flex: 1, marginBottom: 8, marginLeft: 10, fontSize: 15 }} onChange={e => showSuggestSearch(e.target.value)} type="text" placeholder="Bạn cần mua gì?" />
                <div style={{ paddingBottom: 15 }} className='site-btn' >
                    TÌM KIẾM
             </div>
                {/* {searchedData.length ? searchedData.map(item => <> <div style={{ zIndex: 1199, color: 'white', fontWeight: 'bold' }}>
                    {item[1]}
                </div> </>) : null} */}
            </div>
        </div>
    )
}
