// complete the given function

function palindrome(str){
str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
	let i=0
	let j = str.length-1

	while (i<j) {
		if(str.charAt(i)!==str.charAt(j))
		{
			return false
		}
		i++
		j--
	}
	return true
}
module.exports = palindrome
