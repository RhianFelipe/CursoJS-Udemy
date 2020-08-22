function Car(speedMax = 200, delta = 5 ){
    // atributo privado 
    let speedCurrent = 0

    //metodo publico
    this.speedUp = function() {
        if (speedCurrent + delta <= speedMax) {
            speedCurrent += delta
        } else {
            speedCurrent = speedMax
        }

    }
    //metodo publico
    this.getSpeedCurrent  = () => {
        return speedCurrent
    }
}

const uno = new Car
uno.speedUp()
console.log(uno.getSpeedCurrent())

const ferrari = new Car(350,20)
ferrari.speedUp()
ferrari.speedUp()
ferrari.speedUp()
console.log(ferrari.getSpeedCurrent())

console.log(typeof Car)
console.log(typeof ferrari)