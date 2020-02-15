const macha = require("mocha")
const expect = require("chai").expect
const {
    app
} = require("../main")



describe("test", () => {

    it("test2 ", () => {

        expect(app).to.exist

    })
})