class Bob {
    constructor(x, y,radius) {
      var options = {
        'isStatic':true,
        'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      fill("purple");
      circle(0, 0, this.radius);
    }
  };
  