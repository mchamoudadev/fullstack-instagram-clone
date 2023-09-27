import React from 'react';

const UserProfile = ({ author }) => {
    return (
        <div className='flex items-center py-2'>
            <img src={author.url ?? "https://lh3.googleusercontent.com/ogw/AKPQZvyv5K7CceI7Vod8BFJOo_mEdFAI3o3gx0U4tFwzTTw=s32-c-mo"} alt="Author" className="rounded-full w-10 h-10 object-cover" />
            <span className="ml-4 text-sm font-semibold text-gray-800">{author.username}</span>
        </div>
    );
};

export default UserProfile;