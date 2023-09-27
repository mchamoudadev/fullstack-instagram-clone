// Modal.js
import React, { useState } from "react";
import { useAddPostMutation } from "../../features/api/postApiSlice";

function Modal({ onClose, onSubmit }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const [addPost, { isLoading }] = useAddPostMutation();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("image", image);
        if (content && image) {
            handleAddPost({ content, image });

        }
    };

    const handleAddPost = (post) => {
        console.log("post", post);
        addPost(post).unwrap()
            .then(() => onClose())
            .catch((err) => console.log("error creating post", err));

    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log("fiel", file);
        if (file) setImage(file);
    };

    if (isLoading) return <h1>creating post...</h1>;

    return (
        <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                />
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Modal;
