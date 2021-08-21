class Manager {
    constructor(name, id, email, officeNumber,title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.title = title;
    }

getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getOfficeNumber() {
    return this.officeNumber;

}

getRole() {
    return "Manager";
}

}

module.exports = Manager;