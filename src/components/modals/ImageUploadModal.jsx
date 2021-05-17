import React from 'react';


const ImageUploadModal = () => {
    return (
    <div className="modal fade" id="uploadModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <form className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLabel">Upload Image</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-group form-group-sm">
                    <label htmlFor="">Image</label>
                    <input type="file" className="form-control" />
                </div>
                <div className="form-group form-group-sm">
                    <label htmlFor="">Image Decription</label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
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
export default ImageUploadModal;