const Employees = require("./Employees")

    class Doctor extends Employees{

        constructor(){
        super();
        this.salary = 90000;
        this.specialty = this.getSpecialty();
        this.drawBlood = true
        }
        getSpecialty() {

         specialtyArray = ["generalSurgery", "transplantSurgery", "urology"];
            switch (math.floor(3 * math.random())) {

            case "0": 
            return specialtyArray[0];
            break;

            case "1":
            return specialtyArray[1];
            break;

            case "2":
            return specialtyArray[2];
            break;

            default: return ""

        }
    }
}

module.exports = Doctor;