import React, {useState} from 'react'

export default function Input(props) {
    const [value, setValue] = useState(props.value)

    return (
        <>
            <input 
                onChange = {e => props.onChange(e)}
                value = {value}
                style={props.style}
                type={props.type}
            />
            {/* {value ? <span style = {{color: 'red', fontSize: 14}}>Trường này không được để trống</span> : null} */}
        </>
    )
}
