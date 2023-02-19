import { Button, Modal } from 'react-bootstrap';

interface Props {
    show: boolean;
    handleClose: any;
    navigateDashboard: any;
}

export default function SuccessModal({ show, handleClose, navigateDashboard }: Props) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>A user has been created</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Stay on this page
                    </Button>
                    <Button variant='primary' onClick={navigateDashboard}>
                        Go to Dashboard
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
