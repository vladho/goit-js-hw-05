class Car {
  constructor(maxSpeed, speed, isOn, distance, price) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  get priice() {
    return this._price;
  }

  set priice(amount) {
    this.price = amount;
  }

  static getSpecs(car) {
    console.log(`maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this.price}`)
  }


  turnOn() {

    return this.isOn = true;
  }

  turnOff() {
    this.speed = 0;
    return this.isOn = false;

  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (isNaN(this.speed)) {
      this.speed = 0;
      // console.log(this.speed);
    }
      console.log("da")
      if (value < this.maxSpeed.maxSpeed) {
        this.speed += value;
      }
        //   console.log("da")
    // }
    // else
    //   console.log("net")
    return this.speed
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed > 0) {
      this.speed -= value;
    }
    return this.speed
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this.distance = this.speed * hours
    return this.distance
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

// console.log(mustang.turnOn())
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
console.log(mustang.maxSpeed)
console.log("speed = ", mustang.speed);

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
// mustang.turnOff();
console.log(mustang.maxSpeed)
// console.log(mustang.turnOff())
console.log("speed = ", mustang.speed);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000