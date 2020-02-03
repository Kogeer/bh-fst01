// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére

// (1)

const person = { first: 'John', last: 'Doe' }

<<<<<<< HEAD
// const first = obj.first
// const last = obj.last
const {first,last} = person
=======
const first = obj.first
const last = obj.last
//Megoldás:
    const {first, last} = person
>>>>>>> ff7383a43c9f7ed67cc462f72e100917ca4510ed

console.log(first, last)

// (2)

person.address = {
    city: 'Whasington',
    state: 'DC',
    street: '6th street'
}
<<<<<<< HEAD
// const state = person.address.state
const { address: {state} } = person
console.log(state);
=======
const state = person.address.state
//Megoldás:
    const {address: {state}} = person

console.log(state)
>>>>>>> ff7383a43c9f7ed67cc462f72e100917ca4510ed
