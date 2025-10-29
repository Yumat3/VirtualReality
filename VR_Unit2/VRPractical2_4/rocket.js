class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.01;
        this.obj = document.createElement("a-entity");

        let tipt = document.createElement("a-sphere");
        tipt.setAttribute("color","white");
        tipt.setAttribute("position","0 2.7375 0");
        tipt.setAttribute("radius","0.15");
        this.obj.append( tipt );

        let tip = document.createElement("a-cone");
        tip.setAttribute("color","white");
        tip.setAttribute("position","0 2.4375 0");
        tip.setAttribute("radius-bottom","0.35");
        tip.setAttribute("radius-top","0.15");
        tip.setAttribute("height","0.625");
        this.obj.append( tip );
        let tip1 = document.createElement("a-cone");
        tip1.setAttribute("color","white");
        tip1.setAttribute("position","0 1.8125 0");
        tip1.setAttribute("radius-bottom","0.45");
        tip1.setAttribute("radius-top","0.35");
        tip1.setAttribute("height","0.625");
        this.obj.append( tip1 );

        let tip2 = document.createElement("a-cone");
        tip2.setAttribute("color","white");
        tip2.setAttribute("position","0 1 0");
        tip2.setAttribute("radius-bottom","0.5");
        tip2.setAttribute("radius-top","0.45");
        tip2.setAttribute("height","1");
        this.obj.append( tip2 );

        let base = document.createElement("a-cylinder");
        // base.setAttribute("segments-radial","3");
        base.setAttribute("rotation","0 0 0");
        base.setAttribute("color","brown");
        base.setAttribute("position","0 -0.5 0");
        base.setAttribute("height","2");
        base.setAttribute("radius","0.5");
        this.obj.append( base );
        let baset = document.createElement("a-cylinder");
        // base.setAttribute("segments-radial","3");
        baset.setAttribute("rotation","0 0 0");
        baset.setAttribute("color","brown");
        baset.setAttribute("position","0 -3.5 0");
        baset.setAttribute("height","4");
        baset.setAttribute("radius","0.51");
        this.obj.append( baset );

        let etip = document.createElement("a-cone");
        etip.setAttribute("color","white");
        etip.setAttribute("position","0 -2.5 0");
        etip.setAttribute("rotation","-180 0 0");
        etip.setAttribute("radius-bottom","0.25");
        etip.setAttribute("radius-top","0");
        etip.setAttribute("height","2");
        this.obj.append( etip );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj );
    }
    fly(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}