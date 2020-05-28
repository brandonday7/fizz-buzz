const fizzOrBuzz = counter => {
	if (!(counter % 3) && !(counter % 5)) return "FizzBuzz"
	else if (!(counter % 3)) return "Fizz"
	else if (!(counter % 5)) return "Buzz"
	else return ""
}

export { fizzOrBuzz }

change this
