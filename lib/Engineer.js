class Engineer {
  constructor(name, id, email, github, officeNumber, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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

getGithub(){
    return this.getGithub;
}

getOfficeNumber() {
    return this.officeNumber;

}

getRole() {
    return "Engineer";
}

}

module.exports = Engineer;
