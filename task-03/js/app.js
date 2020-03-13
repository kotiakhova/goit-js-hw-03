'use strict'

const findBestEmployee = function(employees) {

    const array = Object.keys(employees);
    let max = 0;
    let coolestWorker;
    

    for (let i=0; i < array.length; i++) {
        
        if (employees[array[i]] > max ) {
            max = employees[array[i]];
            coolestWorker = array[i];


            
        }
    }
    return coolestWorker;
    
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux