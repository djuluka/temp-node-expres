

// asyncronys  -- non-blocking
const { readFile, writeFile } = require('fs')


// assyncronis yo need to have a callback

readFile('./content/firts.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const firts = result

    readFile('./content/firts.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    })
    const second = result

    writeFile(
      './content/result-assync.txt', 
      `Here is my result: ${firts}, ${second}`, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    })
    

})