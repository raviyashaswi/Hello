const cds = require('@sap/cds');
class CatService extends cds.ApplicationService{
    init() {
        this.on("hello", async (req) => {
            return "I'm Working"
        });
        return super.init();
    }
}
module.exports = CatService;