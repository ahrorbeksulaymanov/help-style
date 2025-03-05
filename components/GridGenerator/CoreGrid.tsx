import React, { memo, useState } from "react";
import { Layout } from "react-grid-layout";
import { CiCirclePlus } from "react-icons/ci";

interface CoreGridProps {
    cols: number;
    rows: number;
    margin: number;
    staticLayout: Layout[];
    addItemToLayout: (id: string) => void;
    itemHeight: number;
}

const CoreGrid: React.FC<CoreGridProps> = memo(({ cols, rows, margin, staticLayout, addItemToLayout, itemHeight }) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
        if (e.key === "Enter") {
            addItemToLayout(staticLayout[index].i);
        }

        let newIndex = index;

        if (e.key === "ArrowRight") {
            newIndex = (index + 1) % staticLayout.length; // O'ngga yurish
        } else if (e.key === "ArrowLeft") {
            newIndex = (index - 1 + staticLayout.length) % staticLayout.length; // Chapga yurish
        } else if (e.key === "ArrowDown") {
            newIndex = (index + cols) < staticLayout.length ? index + cols : index; // Pastga yurish
        } else if (e.key === "ArrowUp") {
            newIndex = (index - cols) >= 0 ? index - cols : index; // Tepaga yurish
        }

        document.getElementById(`grid-item-${staticLayout[newIndex].i}`)?.focus();
    };

    return (
        <div
            className="absolute top-0 left-1 right-0 w-full h-full grid-background mr-1"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gap: `${margin}px`,
                padding: `${margin}px`,
                paddingLeft: `${margin - 4}px`,
                paddingRight: `${margin - 4}px`,
                zIndex: 1,
            }}
        >
            {staticLayout?.map((item, index) => (
                <div
                    key={item.i}
                    className="group flex justify-center items-center border border-gray-300 cursor-pointer rounded-md"
                    style={{height: itemHeight, background: "linear-gradient(to bottom right, #6a90f0, #8aaafc, #8aaafc, #6a90f0)" }}
                    onClick={() => addItemToLayout(item.i)}
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                >
                    <CiCirclePlus className="text-[26px] group-hover:rotate-180 group-hover:scale-110 transition-all" />
                </div>
            ))}
        </div>
    )
});
export default CoreGrid;