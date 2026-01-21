const cds = require('@sap/cds');
class CatService extends cds.ApplicationService{
    init() {
        this.on("hello", async (req) => {
            return "I'm Working";
        });
        this.on("hi", async (req) => {
            return `Hi ${req.data.name}`;
        });
        return super.init();
    }
}
module.exports = CatService;