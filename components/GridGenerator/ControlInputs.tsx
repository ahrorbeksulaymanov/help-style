import React, { ChangeEvent, memo, useCallback } from "react";
import { Layout } from "react-grid-layout";
import { LuRefreshCcw } from "react-icons/lu";

interface ControlInputsProps {
    cols: number;
    setCols: (value: number) => void;
    rows: number;
    setRows: (value: number) => void;
    margin: number;
    setMargin: (value: number) => void;
    itemHeight: number;
    setitemHeight: (value: number) => void;
    setLayout: (value: Layout[]) => void;
}

const ControlInputs: React.FC<ControlInputsProps> = memo(({ cols, setCols, rows, setRows, margin, setMargin, itemHeight, setitemHeight, setLayout }) => {

    const handleChange = useCallback(
        (setter: (value: number) => void) => (e: ChangeEvent<HTMLInputElement>) => {
            setter(Number(e.target.value));
        },
        []
    );

    const inputs = [
        { label: "Columns", value: cols, setter: setCols, min: 1, max: 24 },
        { label: "Rows", value: rows, setter: setRows, min: 1, max: 24 },
        { label: "Gap", value: margin, setter: setMargin, min: 0, max: 100 },
        { label: "Item Height", value: itemHeight, setter: setitemHeight, min: 50, max: 100 }
    ];

    const handleReset = useCallback(() => {
        setCols(5);
        setRows(6);
        setMargin(8);
        setitemHeight(60);
        setLayout([{ i: "1", x: 0, y: 0, w: 1, h: 1, isResizable: true }]);
    }, [setLayout, setCols, setRows, setMargin, setitemHeight]);

    return (
        <div className="flex gap-4 mb-4 items-end">
            {inputs.map(({ label, value, setter, min, max }) => (
                <label key={label} className="flex flex-col">
                    {label}:
                    <input
                        type="number"
                        value={value}
                        onChange={handleChange(setter)}
                        // className="border p-1 w-20"
                        className="bg-white w-24 p-2 border border-white bg-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 active:ring-blue-600 transition-all duration-200 text-center"
                        min={min}
                        max={max}
                    />
                </label>
            ))}
            <button onClick={handleReset} className="mb-2 group"><LuRefreshCcw className="text-[25px] group-hover:-rotate-[360deg] ease-out" style={{transition: "0.4s"}} /></button>
        </div>
    );
});
ControlInputs.displayName = "ControlInputs";

export default ControlInputs;
