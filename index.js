// spread operator
const num1 = [1, 2, 3]
const num2 = [...num1, 4, 5, 6]
console.log(num2)

const obj1 = {
    id: 1,
    name: 'Lutfi',
    age: 42
}
const obj2 = {
    address: 'Depok'
}
const spreadObj = {...obj1, ...obj2}
console.log(spreadObj)

// rest operator
const rest = (a, b, ...arrNum) => {
    console.log(arrNum)
}
rest(1, 2, 3, 4)

// <ComponentChild {...props}>