// This plugin creates 5 rectangles on the screen.
const numberOfRectangles = 5;
let count = 0;
let firstSlice = null;
let visiblityTarget = false;
function traverse(node) {
    console.log(node.type);
    if (node.type == "SLICE") {
        if (firstSlice === null) {
            firstSlice = node;
            visiblityTarget = !firstSlice.visible;
        }
        node.visible = visiblityTarget;
    }
    if ("children" in node) {
        for (const child of node.children) {
            traverse(child);
        }
    }
}
traverse(figma.root); // start the traversal at the root
figma.closePlugin();
