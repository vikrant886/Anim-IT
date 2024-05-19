
// this functional component is used to find the position of the cursor lying in the element


const distance = (a, b) =>
    Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const nearPoint = (x, y, x1, y1, name) => {
    return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
};

const onLine = (x1, y1, x2, y2, x, y, maxDistance = 1) => {
    const a = { x: x1, y: y1 };
    const b = { x: x2, y: y2 };
    const c = { x, y };
    const offset = distance(a, b) - (distance(a, c) + distance(b, c));
    return Math.abs(offset) < maxDistance ? "inside" : null;
};

export const positionWithinElement = (x, y, element) => {
    const { type, x1, x2, y1, y2 } = element;
    switch (type) {
        case "line":
            const on = onLine(x1, y1, x2, y2, x, y);
            const start = nearPoint(x, y, x1, y1, "start");
            const end = nearPoint(x, y, x2, y2, "end");
            return start || end || on;
        case "rectangle":
            const topLeft = nearPoint(x, y, x1, y1, "tl");
            const topRight = nearPoint(x, y, x2, y1, "tr");
            const bottomLeft = nearPoint(x, y, x1, y2, "bl");
            const bottomRight = nearPoint(x, y, x2, y2, "br");
            const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
            return topLeft || topRight || bottomLeft || bottomRight || inside;
        case "circle":
            const distanceFromCenter = Math.sqrt((x - x1) * 2 + (y - y1) * 2);
            const radius = Math.sqrt((x1 - x2) * 2 + (y2 - y1) * 2);
            const insideCircle = distanceFromCenter <= radius;
            return insideCircle ? "inside" : null;
        case "pencil":
            const betweenAnyPoint = element.points.some((point, index) => {
                const nextPoint = element.points[index + 1];
                if (!nextPoint) return false;
                return (
                    onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y, 5) != null
                );
            });
            return betweenAnyPoint ? "inside" : null;
        case "eraser":
            const betweenAnyPointe = element.points.some((point, index) => {
                const nextPoint = element.points[index + 1];
                if (!nextPoint) return false;
                return (
                    onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y, 5) != null
                );
            });
            return betweenAnyPointe ? "inside" : null;
        case "text":
            return x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
        default:
            throw new Error("Type not recognised: ${ type }");
    }
};