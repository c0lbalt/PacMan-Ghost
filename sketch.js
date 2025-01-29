function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES)
}

function draw() {
  background("black");

  blendMode(LIGHTEST)

  //Body for Ghost
  fill("red")
  rect(200, 200, 100, 100)

  fill("red")
  circle(250, 200, 100)

  fill("white")
  circle (225, 200, 30)

  fill("white")
  circle (275, 200, 30)

  blendMode(BLEND)

  //Eyes for Ghost
  fill("blue")
  circle(275, 200, 20)

  fill("blue")
  circle(225, 200, 20)


  //Pacman
  fill('yellow')
  circle(75, 225, 150)

  
  fill("black")
  rect(100, 200, 50, 50)
  rotate(radians(45))

  
}
