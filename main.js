var myName = ':)'
var salt = 13

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const secretWordParts = Array.from(myName).map(letter => {
	const letterIndex = alphabet.findIndex(entry => entry === letter)
  let resolvedIndex = letterIndex + salt
  if (letterIndex + salt > 25) {
    resolvedIndex = (letterIndex + salt) % 26
  }
	return alphabet[resolvedIndex]
})
console.log(secretWordParts.join(''))
