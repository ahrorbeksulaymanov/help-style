"use client"
import React, { useCallback, useMemo, useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ControlInputs from "./ControlInputs";
import CodeBlock from "./CodeBlock";
import { generateFullGrid } from "./functions";
import CoreGrid from "./CoreGrid";
import ResetButton from "../ResetButton";
import { useElementSize } from "@/hooks/useEmementSize";
import { IoMdClose } from "react-icons/io";

const GridEditor: React.FC = () => {

    const [cols, setCols] = useState(5);
    const [rows, setRows] = useState(6);
    const [margin, setMargin] = useState(8);
    const [itemHeight, setitemHeight] = useState<number>(60);
    const [layout, setLayout] = useState<Layout[]>([{ i: `1`, x: 0, y: 0, w: 1, h: 1, isResizable: true}]);
    const { ref, size } = useElementSize(); // 📏 Element o‘lchamini olish

    const staticLayout = useMemo(() => generateFullGrid({ cols, rows }), [cols, rows]);

    const handleResizeStop = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
        
        setLayout((prevLayout) =>
            prevLayout.map((item) =>
                item.i === newItem.i && item.isResizable ? { ...item, w: newItem.w, h: newItem.h, isResizable: true } : item
            )
        );
    };

    const handleCloseClick = useCallback((id: string) => {
        setLayout(prevLayout => prevLayout.filter(item => item.i !== id));
    }, []);

    const addItemToLayout = useCallback((id: string) => {
        setLayout(prevLayout => {
            const itemToAdd = staticLayout.find((item) => item.i === id);
            if (!itemToAdd) return prevLayout;
            return [...prevLayout, { ...itemToAdd, i: `${prevLayout.length ? Number(prevLayout[prevLayout.length - 1]?.i) + 1 : 1}` }];
        });
    }, [staticLayout]);

    return (
        <div ref={ref} className="container mx-auto">
            <ControlInputs
                setCols={setCols}
                cols={cols}
                setRows={setRows}
                rows={rows}
                setMargin={setMargin}
                margin={margin}
                // setBgColor={setBgColor}
                // bgColor={bgColor}
                setitemHeight={setitemHeight}
                itemHeight={itemHeight}
                setLayout={setLayout}
            />
            <div>
                <div className="relative" style={{height: 16 + (itemHeight * rows) + (rows-1)*margin}}>
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={cols}
                        rowHeight={itemHeight}
                        width={size.width + 8}
                        margin={[margin, margin]}
                        onLayoutChange={(newLayout: Layout[]) => setLayout(newLayout)}
                        isDraggable={true}
                        onResizeStop={handleResizeStop}
                        isBounded={true}
                        compactType={null}
                    >
                        {layout.map((item, index) => (
                            <div
                                key={item.i}
                                data-grid={item}
                                className={`text-[17px] flex items-center justify-center border cursor-pointer p-0 border-blue-500 bg-darkPurple z-[100] text-white rounded-md`}
                                tabIndex={0}
                                role="gridcell"
                            >
                                <button
                                    className="close-btn absolute right-0 top-0 bg-red-600 p-0.5 rounded-sm"
                                    style={{zIndex: 104}}
                                    onClick={() => handleCloseClick(item.i)}
                                    aria-label={`Remove item ${item.i}`}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleCloseClick(item.i);
                                        }
                                    }}
                                >
                                    <IoMdClose />
                                </button>
                                {item.i}
                            </div>
                        ))}
                    </GridLayout>
                    <CoreGrid
                        cols={cols}
                        rows={rows}
                        margin={margin}
                        addItemToLayout={addItemToLayout}
                        staticLayout={staticLayout}
                        itemHeight={itemHeight}
                    />

                </div>
            </div>
            {/* 📌 HTML va CSS kodlarini chiqarish */}
            <div className="mt-6 grid lg:grid-cols-2 gap-4">
                {/* 📌 HTML kod bloki */}
                <CodeBlock
                    title="HTML Code"
                    type={"html"}
                    cols={cols}
                    rows={rows}
                    margin={margin}
                    layout={layout}
                />

                {/* 📌 CSS kod bloki */}
                <CodeBlock
                    title="CSS Code"
                    type={"css"}
                    cols={cols}
                    rows={rows}
                    margin={margin}
                    layout={layout}
                />

            </div>
        </div>
    );
};

export default GridEditor;
