$(document).ready(function () {


    const characterAmountNumber = document.getElementById("characterAmountNumber")
    const includeUppercaseElement = document.getElementById("includeUppercase")
    const includeLowercaseElement = document.getElementById("includeLowercase")
    const includeSymbolsElement = document.getElementById("includeSymbols")
    const includeNumbersElement = document.getElementById("includeNumbers")

  
    

    const UPPERCASE_CHAR_CODES = charCodeArray(65, 90)
    const LOWERCASE_CHAR_CODES = charCodeArray(97, 122)
    const NUMBER_CHAR_CODES = charCodeArray(48, 57)
    const SYMBOL_CHAR_CODES = charCodeArray(33, 47).concat( charCodeArray(58, 64)
    ).concat( charCodeArray(91, 96)
    ).concat( charCodeArray(123, 126)
    )


    characterAmountNumber.addEventListener("input", syncCharacterAmount)


    $(".form").on("submit", e => {
        e.preventDefault()
        var characterAmount = characterAmountNumber.value
        var includeUppercase = includeUppercaseElement.checked
        var includeLowercase = includeLowercaseElement.checked
       var includeSymbols = includeSymbolsElement.checked
       var includeNumbers = includeNumbersElement.checked

        const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
        $("#passwordDisplay").text(password);
    })
    

    function generatePassword(characterAmount, includeUppercase, includeSymbols, includeNumbers, includeLowercase) {
        let charCodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)

        const passwordCharacters = []
        for (let i = 0; i < characterAmount; i++) {
            const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
            passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return passwordCharacters.join(" ")
    }

    function charCodeArray(low, high) {
        const array = []
        for (let i = low; i <= high; i++) {
            array.push(i)
        }
        return array
    }


    function syncCharacterAmount(e) {
        const value = e.target.value
        characterAmountNumber.value = value
    }

});

