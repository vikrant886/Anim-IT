import rough from "roughjs/bundled/rough.esm";

const generator = rough.generator();

export const createElement = (id, x1, y1, x2, y2, type, linewidth, color) => {
    // alert(x1,y1)
    switch (type) {
        case "line":
        case "rectangle":
            const roughElement =
                type === "line"
                    ? generator.line(x1, y1, x2, y2)
                    : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
            // roughElement.op
            return { id, x1, y1, x2, y2, type, roughElement };
        case "circle":
            const rough = generator.circle(x1,y1,Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)))
            return { id, x1, y1, x2, y2, type, rough };

        case "pencil":
            return {
                id,
                type,
                points: [{ x: x1, y: y1 }],
                linewidth: linewidth,
                color: color,
            };
        case "eraser":
            return {
                id,
                type,
                points: [{ x: x1, y: y1 }],
                linewidth: linewidth,
                color: "#ffffff",
            };
        case "text":
            return { id, type, x1, y1, x2, y2, text: "" };
        default:
            throw new Error("Type not recognised: ${ type }");
    }
};