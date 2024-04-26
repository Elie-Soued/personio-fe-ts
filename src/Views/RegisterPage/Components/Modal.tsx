import { Button, Modal } from 'react-bootstrap';
import { SuccessModalInterface } from '../../../Constants';

export default function SuccessModal({ show, handleClose, navigateDashboard }: SuccessModalInterface) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>A user has been created</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Stay on this page
                    </Button>
                    <Button variant="primary" onClick={navigateDashboard}>
                        Go to Dashboard
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
