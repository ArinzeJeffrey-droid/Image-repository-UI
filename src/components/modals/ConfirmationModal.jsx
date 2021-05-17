import React from 'react';



const ConfirmationModal = () => {
    return (
        <div className="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header invisible">
                <h5 className="modal-title text-center" id="exampleModalLabel">""</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p className="text-center">Are you sure you want to delete this image?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger btn-sm">Yes</button>
            </div>
            </div>
        </div>
    </div>
    );
}

export default ConfirmationModal;