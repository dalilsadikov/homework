let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}
let male = {
    name : 'aziz',
    surname : 'abduraximov',
    number : 998951234556,
    isMarried : false, 
}

let female = {
    nameF : 'maria',
    surnameF : 'sulemanova',
    numberF : 998951456456,
    isMarriedF : true, 
   
}
/////////////////////////////////////////
let maleFemale = Object.assign({},male,female)
console.log(maleFemale);
//соединил два объекта в один////////////
//*
//*
//*
//Вытащил все ключи в массив и сохранил в переменную
let keys = []
Object.keys(maleFemale).filter((item) => {
    keys.push(item)
})
console.log(keys);
//Вытащил все значения в массив и сохранил в переменную
let values = []
Object.values(maleFemale).filter((item) => {
    values.push(item)
})
console.log(values);
//*
//*
//*
//*Соединил два массива в один целый
let keysAndValues = []
values.filter((item) => {
    keysAndValues.push(item)
})
keys.filter((item) => {
    keysAndValues.push(item)
})
console.log(keysAndValues);
//*
//*
//*
/////////////Отфильтровать по типам данных/////////////
/* let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
} */
keysAndValues.filter((item) => {
    if(typeof item === 'number'){
        types.number.push(item);
    }else if(typeof item === 'string'){
        types.string.push(item);
    }else if(typeof item === 'boolean'){
        types.boolean.push(item);
    }else if(typeof item === 'object'){
        types.object.push(item);
    }
})
console.log(types.boolean);// object string number
//DONE//


