window.onload = function() {

	var g = 'grass.png'

	iso = new Iso('isoCanvas', 53);

	// k
	iso.draw(-7, 0, -1, g);
	iso.draw(-7, 0, 0, g);
	iso.draw(-7, 0, 1, g);
	iso.draw(-7, 0, 2, g);
	iso.draw(-7, 0, 3, g);
	iso.draw(-6, 0, 0, g);
	iso.draw(-6, 0, 2, g);
	iso.draw(-5, 0, -1, g);
	iso.draw(-5, 0, 3, g);

	// y
	iso.draw(-4, 0, -3, g);
	iso.draw(-3, 0, -2, g);
	iso.draw(-2, 0, -1, g);
	iso.draw(-3, 0, 0, g);
	iso.draw(-2, 0, 0, g);
	iso.draw(-1, 0, 1, g);
	iso.draw(-4, 0, 1, g);
	
	// l
	iso.draw(1, 0, -1, g);
	iso.draw(1, 0, 0, g);
	iso.draw(1, 0, 1, g);
	iso.draw(1, 0, 2, g);
	iso.draw(1, 0, 3, g);
	
	// i
	iso.draw(3, 0, -1, g);
	iso.draw(3, 0, 0, g);
	iso.draw(3, 0, 2, g);
	
	// e
	iso.draw(5, 0, -1, g);
	iso.draw(5, 0, 0, g);
	iso.draw(5, 0, 1, g);
	iso.draw(6, 0, 0, g);
	iso.draw(6, 0, 2, g);
	iso.draw(6, 0, -2, g);
	iso.draw(7, 0, 1, g);
	
	
	//iso.draw(0, 0, 0, 'grass.png');
	//iso.draw(0, 0, 0, 'grass.png');

}
