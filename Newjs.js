class UserTemplate {
    constructor(name,password,age,creationdate) {
        this.name = name
        this.password = password
        this.age = age
        this.creationdate = creationdate
        this.connected = false
    }
    /* Function to Login */
    login() {
        this.connected = true
        console.log('Your login status :', this.connected)
    }
}

user1 = new UserTemplate('Prach',123,26,17012021)
user2 = new UserTemplate('Jod',456,27,16012020)

console.log(user1.123)