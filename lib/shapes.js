class Triangle{
    constructor(height,width,color,text) {
        height = 100;
        width = 100;
        this.color = color;
        this.text = text;
    }
};

class Circle{
    constructor(height,width,color,text) {
        height = 100;
        width = 100;
        this.color = color;
        this.text = text;
    }
};


class Square{
    constructor(height,width,color,text) {
        height = 100;
        width = 100;
        this.color = color;
        this.text = text;
    }
};

function renderImage (color,shape,text) {
    if (shape == 'Triangle') {
        console.log('this is a triangle');
        return new Triangle ();
    }
    if (shape == 'Square') {
        console.log('this is a square');
        return new Square ();
    }
    if (shape == 'Circle') {
        console.log('this is a circle');
        return new Circle ();
    }
};

module.exports = { renderImage };