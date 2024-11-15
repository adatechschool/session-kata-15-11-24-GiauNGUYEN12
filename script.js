function getLatinCharacterList(text){
    return text.split("")
}
getLatinCharacterList("HELLOWORLD")
console.log(getLatinCharacterList("HELLOWORLD"))
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}
//console.log(latinToMorse["A"])
function translateLatinCharacter(characterToTranslate){ 
    return latinToMorse[characterToTranslate] 
}
console.log(translateLatinCharacter("A")) 
function encode(text){
    let result = getLatinCharacterList(text)
    for (let index = 0; index <= result.length; index++){
        let afterTransllate =""
        afterTransllate += translateLatinCharacter(result[index])
        console.log(afterTransllate)
    }
}
encode("STELLA")
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }