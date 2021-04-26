
var arguments = process.argv

// function add() {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }
const phoneticInt = args => {
    let numberMapping = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    let result = ""

    for (let i = 2; i < args.length; i++) {
        let numStr = "" + args[i]

        for (let j = 0; j < numStr.length; j++) {
            let numChar = numStr.charAt(j)

            result += numberMapping[numChar]
        }
        result += ","
    }
    return result.substring(0, result.length - 1)
}

console.log(phoneticInt(arguments))
