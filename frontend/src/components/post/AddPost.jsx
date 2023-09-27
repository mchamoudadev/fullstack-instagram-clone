// App.js
import React, { useState } from "react";
import Modal from "./Modal"; // Adjust the import path accordingly
import { useAddPostMutation } from "../../features/api/postApiSlice";

function AddPost({ isModalOpen, setIsModalOpen }) {




    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div>


            {isModalOpen && (
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)"
                }}>
                    <Modal onClose={handleCloseModal} />
                </div>
            )}
        </div>
    );
}

export default AddPost;
