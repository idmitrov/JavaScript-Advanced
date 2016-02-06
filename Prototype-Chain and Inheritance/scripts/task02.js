var ShapesModule = (function() {
	// SHAPE (BASE OBJECT)
	var shape = {
		init: function(aX, aY) {
			this.aX = aX;
			this.aY = aY;
			
			return this;
		},
		toString: function() {
			return this.constructor.name + ' aX=' + this.aX + ' aY=' + this.aY;
		}
	};

	// CIRCLE => INHERIT SHAPE
	var circle = Object.create(shape);
	circle.init = function(aX, aY, radius, color) {
		shape.init.call(this, aX, aY);
		this.radius = radius;
		this.color = color;

		return this;
	}
	circle.toString = function() {
		return this.constructor.name + ' aX=' + this.aX + ' aY=' 
			+ this.aY + ' radius=' + this.radius + ' color=' + this.color;
	}

	// RECTANGLE => INHERIT SHAPE
	var rectangle = Object.create(shape);
	rectangle.init = function(aX, aY, width, height, color) {
		shape.init.call(this, aX, aY);
		this.width = width;
		this.height = height;
		this.color = color;

		return this;
	}
	rectangle.toString = function() {
		return this.constructor.name + ' aX=' + this.aX 
			+ ' aY=' + this.aY + ' width=' + this.width 
			+ ' height=' + this.height + ' color=' + this.color;	
	}

	// TRIANGLE => INHERIT SHAPE
	var triangle = Object.create(shape);
	triangle.init = function(aX, aY, bX, bY, cX, cY, color) {
		shape.init.call(this, aX, aY);
		this.bX = bX;
		this.bY = bY;
		this.cX = cX;
		this.cY = cY;
		this.color = color;

		return this;
	}
	triangle.toString = function() {
		return this.constructor.name + ' aX=' + this.aX 
			+ ' aY=' + this.aY + ' bX=' + this.bX 
			+ ' bY=' + this.bY + 'cX=' + this.cX
			+ ' cY=' + this.cY + ' color=' + this.color;	
	}

	// LINE => INHERIT SHAPE
	var line = Object.create(shape);
	line.init = function(aX, aY, bX, bY, color) {
		shape.init.call(this, aX, aY);
		this.bX = bX;
		this.bY = bY;
		this.color = color;

		return this;
	}
	line.toString = function() {
		return this.constructor.name + ' aX=' + this.aX
			+ ' aY=' + this.aY + ' bX=' + this.bX
			+ ' bY=' + this.bY + ' color=' + this.color
	}

	// SEGMENT => INHERIT LINE
	var segment = Object.create(line);

	// INSTANCES
	var circleInstance = Object.create(circle).init(1, 2, 90, '#000');
	var rectangleInstance = Object.create(rectangle).init(3, 4, 200, 400, '#09F');
	var triangleInstance = Object.create(triangle).init(1, 2, 3, 4, 5, 6, '#FFF');
	var lineInstance = Object.create(line).init(1, 1, 2, 2, '#F00');
	var segmentInstance = Object.create(segment).init(0, 0, 9, 9, '#0F0');

	// RETURNING MODULE
	return {
		circle: circleInstance,
		rectangle: rectangleInstance,
		triangle: triangleInstance,
		line: lineInstance,
		segment: segmentInstance
	}
} ());

console.log(ShapesModule.circle);
console.log(ShapesModule.rectangle);
console.log(ShapesModule.triangle);
console.log(ShapesModule.line);
console.log(ShapesModule.segment);
