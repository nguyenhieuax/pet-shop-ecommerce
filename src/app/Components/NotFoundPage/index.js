import React from 'react'

export default function NotFoundPage(props) {
    const onBackHome = () => {
        props.history.push({pathname: '/'})
    }
    return (
        <div className='col-lg-12 col-md-12' style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: 20, marginRight: 20}}>
            <div style = {{flex: 1,fontSize: 130, fontWeight: 'bold', color: 'green'}}>
                404 Not Found
            </div>
            <div style = {{flex : 1,fontSize: 25, fontWeight: 'bold'}}>
                Rất tiếc, trang này không tồn tại 
            </div>
            <div style = {{flex: 1, fontSize: 20, fontWeight: 'bold'}}>
                Liên kết bạn vào có thể bị hỏng, hoặc trang này có thể đã được gỡ bỏ
            </div>
            <button style = {{marginTop: 30}} onClick={onBackHome}  className="site-btn">Về trang chủ</button>

        </div>
    )
}
