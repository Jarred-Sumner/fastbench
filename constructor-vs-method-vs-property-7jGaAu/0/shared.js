let a = 0
class Test1 {
	constructor() {
		a += 1
	}
}
class Test2 {
	add() {
		a += 1
	}
}
class Test3 {
	add = () => {
		a += 1
	}
}