function isPangram(string){
    let pangram = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i = 0; i < pangram.length; i++){
      if(!string.includes(pangram[i])){
        return false
      }
  }
  return true;
  }