

var obj = {
    width: 123,
    property: "property value",
};
console.log(obj);

function Car(color, wheel, engine){
    this.color = color;
    this.wheel = wheel;
    this.engine = engine;
}

let audi = new Car("red", 4, {volume:2, power:234});
console.log(audi.color);
