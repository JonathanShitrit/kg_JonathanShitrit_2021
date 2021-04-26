var arguments = process.argv

const phoneticInt = args => {
    // For every number in args, loop through the number's digits, 
    // append to result string the numbers' phonetic representation from numberMapping.
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

    // Runtime: O(n * m), where n = # of arguments provided and m = # of digits in the longest number.
    // Space: O(1), since the numberMapping does not grow.
}

console.log(phoneticInt(arguments))
