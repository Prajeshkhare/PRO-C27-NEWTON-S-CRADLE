class rope{
    constructor(bodyA,bodyB,offsextX,OffsetX){
    this.OffsetX=OffsetX
    this.offsetY=offsetY
    var optins={
        bodyA:body1,
        bodyB:body2,
        pointB:{X:this.this.offsetX, y:this.offsetY}
    }
    //console.log(optins);
    this.rope=Constraint.create(optins)
    World.add(world,this.rope)
    }
}