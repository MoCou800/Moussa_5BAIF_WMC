const products = [
    {id: 1 , name: "Matcha", price: 15, beschreibung: "Leker", isLegal: true},
    {id: 2 , name: "Red Bull", price: 2, beschreibung: "Gibt Flugel", isLegal: true},
    {id: 3 , name: "Kuchen", price: 12, beschreibung: "Brauchen wir jeden Tag", isLegal: true}
]

// A
const productsNachPreis = products
    .filter(p => p.price >= 10 && p.price < 20);

//console.log(productsNachPreis)

const productsNachPreisFor = [];
for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.price >= 10 && p.price < 20) {
        productsNachPreis.push(p);
    }
}
console.log("Test")
console.log(productsNachPreisFor)


// B
const productsWeniger10 = products
    .filter(p => p.price < 10)
    .map(p => ({
        ...p,
        price: p.price * 2
    }));

console.log(productsWeniger10);

const productsWeniger10For = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].price < 10) {
        productsWeniger10.push({
            ...products[i],
            price: products[i].price * 2
        });
    }
}

console.log(productsWeniger10For);


// C
const name = ["Moussa", "Morhaf"]
const [lastname, firstname] = name
console.log(lastname)
console.log(firstname)

const newName = ["Hallo", ...name, " !"]
console.log(newName)


const person = [{ firstName: "Morhaf", lastName: "Moussa", nummer: 431234567 }];
const { _firstName, lastName: familyname, ...rest } = person;
console.log(familyname);
console.log(rest);

const numbers1 = [11, 22, 33, 44, 55];
const [_first, _second, ..._rest1] = numbers1;


const numbers = [10, 20, 30, 40];
const [first1, second2, third] = numbers;
console.log(first1);
console.log(second2);
console.log(third);


const _person2 = { name: 'Morhaf', age: 21, city: 'Wien' };
const { name1, city } = person;

console.log(name1);
console.log(city);






const person45 = { firstName: "Morhaf", lastName: "Moussa", nummer: 431234567 };
const { name45, ...others } = person45;

console.log(name45);
console.log(others);


// D
function sum(arr){

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum+= arr[i].price;
    }
    return sum;
}


console.log(sum(products))









