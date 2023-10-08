import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Details = () => {
    const [loginData, setLoginData] = useState([]);
    console.log('loginData is : - ',loginData)
    const [show, setShow] = useState(false);
    let today = new Date();
    let todayDate = today.toISOString().slice(0, 10);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const birthDay = () => {

        const getUser = localStorage.getItem("userLogin");
       
        if (getUser && getUser.length) {
            const user = JSON.parse(getUser);
            console.log("USer is : - ", user);
            setLoginData(user);
            const userBirth = user.map((el) => {
                console.log(el.date, todayDate);
                return el.date === todayDate;
            })
            if(userBirth){
                handleShow();
            }
        }
    }
    useEffect(() => {
        birthDay();
    }, [])
    return (
        <>
            {loginData.length === 0 ? <h1>Error</h1> :
            <>
              <h1>Details Page</h1>
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{loginData[0].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Wish You many many happy returns of the Day......!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
            } 
        </>
    )
}

