const sentence = "hello there from lighthouse labs";


const temp = function(str){
  let delay = 500;
  const setFun = sentence.length -1;
  for(let i=0; i<str.length; i++){
    setTimeout(() => {
      process.stdout.write(str[i]);
      if(i === setFun){
        // console.log('\nIam done');
        process.stdout.write('\n');
      }
      
    }, delay);
  
    delay += 200;
  
  }

};

temp(sentence);
//console.log('setFun', setFun);
// for (const char of sentence) {
