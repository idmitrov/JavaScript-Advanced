var ShapesModule = (function() {
	// SHAPE
	function Shape(aX, aY) {
		this.aX = aX;
		this.aY = aY;
	}
	Shape.prototype.toString = function () {
		return this.constructor.name + ' x=' + this.aX + ' y=' + this.aY;
	}
	Shape.prototype.draw = function(context) {
		context.fillRect(this.aX, this.aY);
	};
	// CIRCLE
	function Circle(aX, aY, radius, color) {
		Shape.call(this, aX, aY);
		this.radius = radius;
		this.color = color;
	}
	Circle.prototype = Object.create(Shape.prototype);
	Circle.prototype.constructor = Circle;
	Circle.prototype.toString = function () {
		return this.constructor.name 
			+ ' x=' + this.aX + ' y=' + this.aY 
			+ ' radius=' + this.radius  + ' color=' + this.color;
	}
	/*
		DRAW CIRCLE ON CANVAS ELEMENT
	*/
	Circle.prototype.draw = function(context) {
		context.beginPath();
		context.arc(this.aX, this.aY, this.radius, 0,  100 * Math.PI);
		context.fillStyle = this.color;
		context.fill();
	}
	// RECTANGLE
	function Rectangle (aX, aY, width, height, color) {
		Shape.call(this, aX, aY);
		this.width = width;
		this.height = height;
		this.color = color;
	}
	Rectangle.prototype = Object.create(Shape.prototype);
	Rectangle.prototype.constructor = Rectangle;
	Rectangle.prototype.toString = function () {
		return this.constructor.name 
			+ ' x=' + this.aX + ' y=' + this.aY 
			+ ' width=' + this.width + ' height=' + this.height
			+ ' color=' + this.color;
	}
	/*
		DRAW RECTANGLE ON CANVAS ELEMENT
	*/
	Rectangle.prototype.draw = function(context) {
		context.fillStyle = this.color;
		context.fillRect(this.aX, this.aY, this.width, this.height);
	}
	// TRIANGLE
	function Triangle (aX, aY, bX, bY, cX, cY, color) {
		Shape.call(this, aX, aY);
		this.bX = bX;
		this.bY = bY;
		this.cX = cX;
		this.cY = cY;
		this.color = color;
	}
	Triangle.prototype = Object.create(Shape.prototype);
	Triangle.prototype.constructor = Triangle;
	Triangle.prototype.toString = function () {
		return this.constructor.name 
			+ ' aX=' + this.aX + ' aY=' + this.aY 
			+ ' bX=' + this.bX + ' bY=' + this.bY
			+ ' cX=' + this.cX + ' cY=' + this.cY
			+ ' color=' + this.color;
	}
	/*
		DRAW TRIANGLE ON CANVAS ELEMENT
	*/
	Triangle.prototype.draw = function(context) {
		context.beginPath();
		context.fillStyle = this.color;
		context.moveTo(this.aX, this.aY);
		context.lineTo(this.bX, this.bY);
		context.lineTo(this.cX, this.cY);
		context.fill();
	}
	// LINE
	function Line (aX, aY, bX, bY, color) {
		Shape.call(this, aX, aY);
		this.bX = bX;
		this.bY = bY;
		this.color = color;
	}
	Line.prototype = Object.create(Shape.prototype);
	Line.prototype.constructor = Line;
	Line.prototype.toString = function () {
		return this.constructor.name 
			+ ' aX=' + this.aX + ' aY=' + this.aY 
			+ ' bX=' + this.bX + ' bY=' + this.bY
			+ ' color=' + this.color;
	}
	/*
		DRAWING ON CANVAS
	*/
	Line.prototype.draw = function(context) {
		context.strokeStyle = this.color;
		context.moveTo(this.aX, this.aY);
		context.lineTo(this.bX, this.bY);
		context.stroke();
	}
	// SEGMENT
	function Segment(aX, aY, bX, bY, color) {
		Line.call(this, aX, aY, bX, bY, color);
	}
	Segment.prototype = Object.create(Line.prototype);
	Segment.prototype.constructor = Segment;

	// SAHPES
	var shapes = {};
	shapes.circle = new Circle(100, 120, 10, '#09F');
	shapes.rectangle = new Rectangle(7, 8, 40, 50, '#CCC');
	shapes.triangle = new Triangle(140, 40, 120, 0, 60, 40, '#F00');
	shapes.line = new Line(100, 100, 1, 1, '#00C');
	shapes.segment = new Segment(200, 200, 300, -200, '#00F');

	return shapes;
} (ShapesModule || {}));

// DRAWING ON CANVAS
var canvas = document.getElementById('target');
var context = canvas.getContext('2d');

for (var figure in ShapesModule) {
	ShapesModule[figure].draw(context);
}