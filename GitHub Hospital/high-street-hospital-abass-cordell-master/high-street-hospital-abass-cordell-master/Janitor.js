class Janitor {

    constructor(){

        this.name = "John";
        this.idNumber = 555;
        this.sweeping = false;

    }

    getSweeping(){

        return this.sweeping;
    }

    startSweeping(){

        return this.sweeping = true;
    }

    finishSweeping(){

        return this.sweeping = false
    }

}

module.exports = Janitor; 
