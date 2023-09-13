// class
const car = {
    name: "vw",
    milage: 200,
    honk: function () {
        console.log('honk, honk')

    }

}
// console.log(car)

const Car = (name, mileage = 0) => ({
    name,
    mileage,
    honk: function () {
        console.log(this.name + ' is honking, honk')


    }
})

const vishalsCar = Car('tesla', 10000)
const josesCar = Car('Maserati', 0)

// console.log(vishalsCar)
// console.log(josesCar.name)


class Vehicle {
    constructor(make, model, year, mileage = 0){
        this.make = make
        this.model = model
        this.year = year;
        this.milage = mileage;
    }

    drive = (miles) => {
        this.milage += miles
    }
}

const vishalsVehicle = new Vehicle('tesla', 'model 3', 2019, 1999)
const josesVechile = new Vehicle('Maserati', 'ghibli', 2020, 0)
console.log(josesVechile)



class MotorCycle extends Vehicle {
    constructor(make, model, year, mileage = 0){
        super(make, model, year, mileage)
        this.isAMotorcycle = true
    }
}

const someBike = new MotorCycle('honda', 'mike', 199,123)
someBike.drive(100)
console.log(someBike)