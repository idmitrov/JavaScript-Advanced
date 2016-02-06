var ShapesModule = (function() {
	// SHAPE
	function Shape(aX, aY) {
		this.aX = aX;
		this.aY = aY;
	}

	Shape.prototype.toString = function () {
		return this.constructor.name + ' x=' + this.aX + ' y=' + this.aY;
	}
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
	// SEGMENT
	function Segment(aX, aY, bX, bY, color) {
		Line.call(this, aX, aY, bX, bY, color);
	}
	Segment.prototype = Object.create(Line.prototype);
	Segment.prototype.constructor = Segment;

	// SAHPES
	var shapes = {};
	shapes.circle = new Circle(10, 12, 90, '#09F');
	shapes.rectangle = new Rectangle(7, 8, 40, 50, '#000');
	shapes.triangle = new Triangle(9, 8, 7, 6, 5, 4, '#F00');
	shapes.line = new Line(0, 0, 1, 1, '#FFF');
	shapes.segment = new Segment(-1, -2, -3, -4, '#00F');

	return shapes;
} (ShapesModule || {}));

// TESTS
console.log(ShapesModule.circle);
console.log(ShapesModule.rectangle);
console.log(ShapesModule.triangle);
console.log(ShapesModule.line);
console.log(ShapesModule.segment);