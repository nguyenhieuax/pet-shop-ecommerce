import React, { useState } from 'react';


export const CheckBox = (props) => {
    const [check, setcheck] = useState(false)
    console.log('checkbox id ==========================', props.id)

    const onCheck = () => {
        setcheck(!check);

        if(!check) {
            if(props.id === 1) {
                let item = props.data.filter(item => item.price > 50000);
                console.log('item fitered -----------------',item )
            } else if( props.id === 2) {
                let item = props.data.filter(item => item.price > 50000 && item.price < 100000);
                console.log('item fitered -----------------',item )
            
            } else if( props.id === 3) {
                let item = props.data.filter(item => item.price > 100000 && item.price < 200000);
                console.log('item fitered -----------------',item )
            
            } else if( props.id === 4) {
                let item = props.data.filter(item => item.price > 200000 && item.price < 500000);
                console.log('item fitered -----------------',item )
            
            } else if( props.id ===5) {
                let item = props.data.filter(item => item.price > 500000);
                console.log('item fitered -----------------',item )
            }
        }
        
        // } else if( props.id === 6) {
        //     let item = props.data.filter(item => item.price > 50000 && item.price < 100000);
        //     console.log('item fitered -----------------',item )
        
        // } else if( props.id === 7) {
        //     let item = props.data.filter(item => item.price > 50000 && item.price < 100000);
        //     console.log('item fitered -----------------',item )
        
        // } else if( props.id === 8) {
        //     let item = props.data.filter(item => item.price > 50000 && item.price < 100000);
        //     console.log('item fitered -----------------',item )
        
        // } else if( props.id === 9) {
        //     let item = props.data.filter(item => item.price > 20000 && item.price < 500000);
        //     console.log('item fitered -----------------',item )
        
        // } else if( props.id === 10) {
        //     let item = props.data.filter(item => item.price > 500000);
        //     console.log('item fitered -----------------',item )
        // }
      
    }
    return (
        <div>
            <input
                name="isGoing"
                type="checkbox"
                checked={props.check}
                onChange={props.onCheck}
            />
            <label style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, fontWeight: 'normal' }}>{props.label}</label>
        </div>
    )
}