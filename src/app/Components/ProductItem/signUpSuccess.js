
import React, { useEffect, useState } from 'react';
import { icons } from '../../assets/icons'
import { Modal, Button } from 'react-bootstrap'

const SignUpSuccess = (props) => {
    console.log('show modal', props.showModal)
    useEffect(() => {
        setShow(props.showModal)
    }, [props.showModal])
    const [show, setShow] = useState(props.showModal);

    // const handleClose = () => setShow(false);

    return (
        <div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn đã thêm sản phẩm vào giỏ hàng thành công</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button> */}
                    <Button variant="primary" onClick={props.handleClose}>
                       Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SignUpSuccess;