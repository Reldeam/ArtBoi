class ArtBoi {}

ArtBoi.Canvas = class {
    constructor(element) {
        this.element = element;
        this.context = element.getContext('2d');
        this.graphics = [];
    }

    add(graphic) {
        if(this.graphics.indexOf(graphic) !== -1) return false;
        this.graphics.push(graphic);
        return true;
    }

    remove(graphic) {
        this.graphics.splice(this.graphics.findIndex(graphic), 1);
    }

    render() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        for(let graphic of this.graphics) {
            graphic.render(this.context);
        }
    }
};

ArtBoi.Graphic = class {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.fillStyle = null;
        this.strokeStyle = "black";
    }

    render(context) {}
};

ArtBoi.Circle = class extends ArtBoi.Graphic {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    render(context) {
        context.beginPath();
        context.strokeStyle = this.strokeStyle;
        context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        context.stroke();

        if(this.fillStyle !== null) {
            context.fillStyle = this.fillStyle;
            context.fill();
        }
    }
};