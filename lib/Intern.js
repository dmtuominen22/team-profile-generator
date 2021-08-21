class Intern {
    constructor(name, id, email, school, github, officeNumber,  title) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school,
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

    getSchool(){
        return this.school;
    }
    
    getGithub(){
        return this.getGithub;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    
    }
    
    getRole() {
        return "Intern";
    }
}
    module.exports = Intern;