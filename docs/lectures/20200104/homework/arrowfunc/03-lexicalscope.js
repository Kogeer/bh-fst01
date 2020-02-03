// Írjuk át a function expressionöket, ahol lehet,
// arrow functionre. A paramétereken és a visszatérési értékeken
// ne változtassunk. Nem minden esetben lehetséges az
// átírás!

// (1)

let steve = {
    name: 'Steve',
    intro: function() { return `My name is ${this.name}` },
    mood: function(weather) {
        switch(weather) {
            case 'rainy': return this.rainy()
            case 'sunny': return this.sunny()
            default: return this.default()
        }
    },
<<<<<<< HEAD
    rainy: () => 'rainiy',
    sunny: () => 'swimming',
    default: () => {}

=======
    rainy: function() {
        return 'coding'
    },
    sunny: function() {
        return 'swimmimg'
    },
    default: function() {

    }
>>>>>>> ff7383a43c9f7ed67cc462f72e100917ca4510ed
}

//Megoldás:
    let steve = {
        name: 'Steve',
        intro: function () { return `My name is ${this.name}` }, //Objektum kulcsszavakra nem működik az arrow function
        mood: function (weather) {
            let cases = {
                'rainy': this.rainy(),
                'sunny': this.sunny(),
                default: this.default()
            };
            return cases[weather];
        },
        rainy: () => 'coding',
        sunny: () => 'swimmimg',
        default: () => { }
    }

console.log(steve.intro())
console.log(steve.mood('sunny')) // == 'coding'

(2)

const factory = {
    manufacturer: 'Fjord',
    mechanic: function() {
        let that = this;
        return {
            canFix: (car) => car.manufacturer === that.manufacturer
        }
    }

}

//Megoldás:
    const factory = {
        manufacturer: 'Fjord',
        mechanic: function() {
            let that = this
            return {
                canFix: (car) => car.manufacturer === that.manufacturer
            }
        }
    }

const car = {manufacturer: 'Fjord'}
console.log(factory.mechanic().canFix(car)) // == true