const Janitor = require("./Janitor");
const underTest = new Janitor;

describe ("getSweeping", () => {
    test("does get sweeping return this.sweeping", ()=> {
        expect(underTest.getSweeping()).toEqual(this.sweeping());
    })
        
    
})
 