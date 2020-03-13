'use strict'

const countProps = function(obj) {
    let b = 0;
    const array = Object.keys(obj);
    for ( let element of array) {
        b = b + 1;
    }
    return b;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3