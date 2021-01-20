class Rope {
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 150
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
        var pos = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        push();
        stroke(0);
        strokeWeight(0)
        line(pointB.x,pointB.y,pos.x,pos.y);
        pop();
        }
    }
    fly(){
        this.rope.bodyA = null;
    }
}