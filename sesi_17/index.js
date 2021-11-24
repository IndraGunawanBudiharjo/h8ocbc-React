// function start() {
//     console.log(1)
//     console.log(2)
//     setTimeout(() => console.log(3), 1000) // async
//                // di atas ini callback
//     console.log(4)
// }

// start()

function showInTerminal (message) {
    console.log(message)
}

// function greeting (name, callback) {
//     const value = `Halo! Nama saya ${name}. Senang bertemu dengan anda`
//     setTimeout(() => callback(value), 1500)
// }

// greeting("budi", showInTerminal)
// greeting("budi", (message) => {
//     console.log(message)
//     console.log("Halo!")
//     console.log("Gudbai!")
// })

async function greeting (name, callback) {
    const value = `Halo! Nama saya ${name}. Senang bertemu dengan anda`
    
    return new Promise((resolve, reject) => {
        setTimeout(() => callback(value), 1500)

        // resolve("Perintah selesai dijalankan")
    })
    
}

greeting("adi", showInTerminal).then(() => console.log("done"))