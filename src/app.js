import Math from './components/math';

function calculate(callback, a,b){
  return new Promise(function(resolve, reject){

    console.log('Processing... please wait');

    setTimeout(()=>{
      var res = callback(a,b);
      res > 0 ? resolve(res) : reject(res);
    },1000);
  });
};

async function doCalculate(callback, a, b){
    var result = await calculate(callback,a,b);
    console.log('Must be a positive number: ' + result);
};

doCalculate(Math.add, 34, 50);
