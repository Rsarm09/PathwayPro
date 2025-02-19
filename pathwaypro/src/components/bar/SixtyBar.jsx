import React from "react";

function SixtyBar () {

    return (
        <>
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div className="bg-gradient-to-r from-greendark to-greenprimary h-full rounded-full transition-all" style={{ width: "60%" }}></div>
        </div>
    
        </>
    )
}

export default SixtyBar;