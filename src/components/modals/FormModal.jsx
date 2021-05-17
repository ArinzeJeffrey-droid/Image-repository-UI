import React from 'react';


const FormModal = () => {
    return (
    <div className="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <form className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLabel">Sign Up</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-group form-group-sm">
                    <label htmlFor="">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group form-group-sm">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group form-group-sm">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save</button>
            </div>
            </form>
        </div>
    </div>
    );
}
export default FormModal;