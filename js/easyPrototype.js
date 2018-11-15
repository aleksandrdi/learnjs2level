
function Vehicle(){
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.color="white";
}

Vehicle.prototype.move = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
}

function Car() {
    Vehicle.call(this);

}


Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var audi = new Car();
