describe("about page", () => {

    it("should load about", () => {

        cy.visit("http://localhost:8300/MainPage")

        cy.contains("about").click()

        cy.url().should("include", "/About")

        cy.contains("this todo app was created by My")



    })


})

//npm run cypress