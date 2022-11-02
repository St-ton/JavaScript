// *****     1     *****
//
// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
//

 const data1 = { a: 1, b: 1 };
 const data2 = { a: 1, b: 1 };
 const data3 = { a: 1, b: 2 };

 function isEqual(obj1, obj2){
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key in obj1){
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
 console.log(isEqual(data1, data2)); 
 console.log(isEqual(data1, data3)); 

// *****     2     *****
//
// Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
//console.log(intersection(data, data2)); // { b: 2 }
//
 const data_1 = { a: 1, b: 2 };
 const data_2 = { c: 1, b: 2 };

 function intersection(obj1, obj2) {
  let newObj = {};
  for (const key in obj1){
    if (obj1[key] === obj2[key]) {
      newObj[key]=obj1[key];
 }

}
return newObj;
 }
 console.log(intersection(data_1, data_2)); 