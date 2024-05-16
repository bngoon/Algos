function URLify(string){
    let url = ' ';
    for(let i = 0; i < string.length; i++){
        if(string[i] === ' '){
            url += '%20';
        } else {
            url += string[i];
        }
    }
    return url;
}

const inputString = 'mr john smtih';
const urlifiedString = URLify(inputString);
console.log(urlifiedString); // Output: 'mr%20john%20smtih'
