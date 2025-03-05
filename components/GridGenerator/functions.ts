import { Layout } from "react-grid-layout";

export function generateFullGrid({rows, cols}: {rows: number, cols: number}): Layout[] {
    const fullLayout: Layout[] = [];
    let itemIndex = 0;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            fullLayout.push({
                i: `${itemIndex}-${Math.random().toString(36).substr(2, 9)}`,
                x,
                y,
                w: 1,
                h: 1,
                isResizable: true,
            });
            itemIndex++;
        }
    }
    return fullLayout;
}

// **CSS kodni generatsiya qilish**
export const generateCSSCode = ({
        cols,
        rows,
        margin,
        layout,
    }: {
        cols: number;
        rows: number;
        margin: number;
        layout: Layout[];
    }) => {

    return `.grid-container {
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    gap: ${margin}px;
}
${layout
    .map((item) => {
        const styles = [
            item.w > 1 ? `grid-column: span ${item.w} / span ${item.w};` : "",
            item.h > 1 ? `grid-row: span ${item.h} / span ${item.h};` : "",
            `grid-row-start: ${item.y + 1};`,
            `grid-column-start: ${item.x + 1};`,
        ]
        .filter(Boolean) // Bo‘sh qatorlarni olib tashlaydi
        .join("\n    "); // CSS kod shaklini saqlaydi

        if(item.y === 0){
            if(item.h === 1 && item.w === 1) return undefined
            return `.item-${item.i} {
    ${styles}
}`;
        }
        return `.item-${item.i} {
    ${styles}
}`;
    })
    .join("\n")}
    `;
};
      

// **HTML kodni generatsiya qilish**
export const generateHTMLCode = ({layout}: {layout: Layout[]}) => {
    return `<div class="grid-container">\n  ${layout
        .map((item) => `  <div class="item-${item.i}">${item.i}</div>`)
        .join("\n  ")}\n</div>`;
};