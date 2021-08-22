const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.title = title;
    }

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;