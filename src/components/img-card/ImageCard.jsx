import React from 'react';
import "./img-card.style.css"


const ImageCard = () => {
    return (
        <div className="card p-0 img-card col-md-4 ms-2 mb-3">
            <img 
                src="https://via.placeholder.com/150"
                className="card-img-top" 
                alt="..."
            />
            <div className="card-body">
                <p className="card-text text-center">
                    Image Description
                </p>
            </div>
            <div className="btn-container">
                <button data-bs-toggle="modal" data-bs-target="#uploadModal" className="btn btn-success btn-sm edit">Edit</button>
                <button data-bs-toggle="modal" data-bs-target="#confirmModal" className="btn btn-danger btn-sm delete">Delete</button>
            </div>
        </div>
    );
}

export default ImageCard;