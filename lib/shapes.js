class Triangle{
    constructor(height,width,color) {
        height = 300;
        width = 200;
        color = questions.color;
    }
};
class Circle{
    constructor(height,width,color) {
        height = 300;
        width = 200;
        color = questions.color;
    }
};
class Square{
    constructor(height,width,color) {
        height = 300;
        width = 200;
        color = questions.color;
    }
};
class Text{
    text = questions.initials; 
};

function renderImage (initials, color, shape) {
    if (shape == 'Triangle') {
        console.log('this is triangle');
        return new Triangle (color);
    }
}

module.exports = { renderImage };