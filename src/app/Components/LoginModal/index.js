// import React from 'react';
// import { Container, Modal, Button, Row, Col } from 'react-bootstrap';

// export const LoginModal = (props) => {
//   return (
//     <>
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >

//         <Modal.Body className="show-grid">
//           <Container>
//             <Row>
//               <Col md={6}>
//                 <div>
//                   <h4>Đăng nhập</h4>
//                   <h5>Bạn đã đăng kí tài khoản</h5>
//                   <form>
//                     <input style = {{display: 'inline'}} placeholder = "Nhập tài khoản hoặc email">
//                     </input>
//                     <input placeholder = "Nhập mật khẩu">
//                     </input>
//                   </form>
//                 </div>
//               </Col>
//               <Col md={6}>
//                 Đăng kí

//             </Col>
//             </Row>

//           </Container>


//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>x
//     </>
//   )
// }

import React from 'react';
import { images } from '../../assets/images/';
import { TopBar } from '../TopBar'

export const LoginModal = (props) => {
  return (
    <>
    <TopBar />
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={images.image_login} alt="IMG" />
          </div>
          <form className="login100-form validate-form">
            <span className="login100-form-title">
              Đăng nhập
        </span>
            <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập email dạng: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Vui lòng nhập mật khẩu">
              <input className="input100" type="password" name="pass" placeholder="Mật khẩu" />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Đăng nhập
          </button>
            </div>
            <div className="text-center p-t-12">
              <span className="txt1">
                {'Quên '} 
          </span>
              <a className="txt2" href="#">
                Tên đăng nhập / Mật khẩu?
          </a>
            </div>
            <div className="text-center p-t-136">
              <a className="txt2" href="#">
                Tạo tài khoản
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>

  )


}


