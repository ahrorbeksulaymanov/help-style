import React, { useCallback } from "react";

const ResetButton: React.FC<{ setLayout: (layout: any[]) => void }> = ({ setLayout }) => {
    
    const handleReset = useCallback(() => {
        setLayout([{ i: "1", x: 0, y: 0, w: 1, h: 1, isResizable: true }]);
    }, [setLayout]);

    return (
        <button
            onClick={handleReset}
            onKeyDown={(e) => e.key === "Enter" && handleReset()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md 
                       hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-400"
            aria-label="Reset grid layout"
            title="Reset grid layout"
        >
            Reset
        </button>
    );
};

export default ResetButton;
