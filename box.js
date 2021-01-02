

//class is a blueprint of the object
class Box{
    //holds the properties
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;

        var options ={
            restitution:1.0,
           
            friction:1.0
        }
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add (world,this.body);
       
    }
    display(){

       var pos=this.body.position;
       var angle= this.body.angle;

       //transformation functions
       //  rotate() , translate() ,push(), pop() 
      
         push(); //saving 
       // rectMode(CENTER)
        fill ("red");
        angleMode(RADIANS);
        translate (pos.x,pos.y);
        rotate (angle);
        rect (0,0,this.width,this.height);
        pop ();//restting
    }
    
}