import React from "react";

function FullBar () {

    return (
        <>
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div className="bg-gradient-to-r from-greendark to-greenprimary h-full rounded-full transition-all" style={{ width: "100%" }}></div>
        </div>
    
        </>
    )
}

export default FullBar;