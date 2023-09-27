const PostSkeleton = () => {
    return (
        <div className="bg-white border border-gray-300 mt-4 mx-auto">
            <div className="p-4 animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="h-64 bg-gray-200"></div>
            <div className="p-4 space-y-2 animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="p-4 border-t border-gray-200 space-y-2 animate-pulse">
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default PostSkeleton;
