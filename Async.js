/////////////////ASYNC/////////////////

console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    })

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const getButter = new Promise((resolve, reject) => resolve(`butter`));
const getColdDrinks = new Promise((resolve, reject) => resolve(`ColdDrinks`));

let ticket = await promiseWifeBringingTicks;
console.log(`wife: i am hungry`);

let popcorn = await getPopcorn;
console.log(`husband: i got ${popcorn}`)
console.log('wife: i need butter')

let butter = await getButter;
console.log(`husband: i got ${butter}`);
console.log('wife: i want coldDrinks');

let ColdDrinks = await getColdDrinks;
console.log(`husband: i got ${ColdDrinks}`)
console.log(`wife: lets go`)

return ticket;
}
preMovie().then((m) => console.log(`preson3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

/////////////////ASYNC(with PROMISES.ALL)/////////////////

console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    })
    let ticket
    try {
        ticket = await promiseWifeBringingTicks;
    } catch (e) {
        ticket = 'going home';
    }

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
const getButter = new Promise((resolve, reject) => resolve(`butter`));
const getColdDrinks = new Promise((resolve, reject) => resolve(`ColdDrinks`));

let [popcorn,butter,ColdDrinks] =  await Promise.all([getPopcorn,getButter,getColdDrinks])
console.log(`${popcorn}, ${butter}, ${ColdDrinks}`)

return ticket;
}
preMovie().then((m) => console.log(`preson3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

