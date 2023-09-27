import React from 'react';

const ImageContainer = ({ image }) => {
    return (
        <div className="w-full">
            <img src={image} alt="Post" className="object-cover w-full" />
        </div>
    );
};

export default ImageContainer;