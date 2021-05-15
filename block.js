class Block{
  constructor(x, y, width, height) {
    var options = {
      density: 0.2            
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    

    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    strokeWeight(2);
    stroke(15);
    push();
    translate(pos.x, pos.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }     
}
