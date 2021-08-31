// module file - fs

// yo can do it syncronisely or assymcronize

// {destructure}
/// blocking
const  {readFileSync,writeFileSync} = require('fs');

// if you dont specify the encoding the return will be a buffer, but if you especify encoding will return string
const firts = readFileSync('./content/firts.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(firts,second)


// the  a is to apend other wise is this option is not there node will overhide the file
writeFileSync('./content/result-sync.txt',`Here is the result : ${firts}, ${second}`,{flag: 'a'})