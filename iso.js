function Iso(div, pixels) {

	// Get the canvas and 2d context with an id of <div>
	this.canvas = document.getElementById(div);
	this.context = this.canvas.getContext('2d');
	
	// Figure out the exact center of the canvas
	this.canvasCenterX = this.canvas.width / 2;
	this.canvasCenterY = this.canvas.height / 2;

	// Set a property for the size of the blocks from <pixels>
	this.blockPixels = pixels;

	// Output some debugging details
	Debugger.log('Block Size: ' + this.blockPixels);

}

Iso.prototype.draw = function(x, y, z, file) {

	// Load the image tile
	var imageTile = new Image();
	imageTile.src = file;

	// Setup some calculated position variables
	var calcX = 0;
	var calcY = 0;
	
	// Find the center of the canvas
	calcX = (this.canvasCenterX - this.blockPixels / 2);
	calcY = (this.canvasCenterY - this.blockPixels / 2);
	
	// Move on the x-axis
	calcX = calcX + ((this.blockPixels/2-1) * x);
	calcY = calcY + ((this.blockPixels/4-1) * x);
	
	// Move on the y-axis
	calcX = calcX + ((this.blockPixels/2-1) * y);
	calcY = calcY - ((this.blockPixels/4-1) * y);
	
	// Move on the z-axis
	var val = ((this.blockPixels/4-1) * z);
	Debugger.log(': ' + this.blockPixels);
	calcY = calcY - ((this.blockPixels/2-1) * z);

	// Draw the image tile
	this.context.drawImage(imageTile, calcX, calcY, this.blockPixels, this.blockPixels);

}
