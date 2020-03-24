'use strict'

const countProps = function(obj) {
    let count = 0;
    const array = Object.keys(obj);
    for ( let element of array) {
        count = count + 1;
    }
    return count;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3