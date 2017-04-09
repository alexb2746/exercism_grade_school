class School {
    constructor() {
        this.schoolRoster = {};
    }
    roster () {
        return this.schoolRoster;
    }
    add (name, grade) {
        "undefined" === typeof this.schoolRoster[grade] ? this.schoolRoster[grade] = [name] : this.schoolRoster[grade].push(name);
        this.grade(grade);
    }
    grade (grade) {
        return "undefined" === typeof this.schoolRoster[grade] ? this.schoolRoster[grade] = [] : this.schoolRoster[grade].sort();
    }
}

module.exports = School;
