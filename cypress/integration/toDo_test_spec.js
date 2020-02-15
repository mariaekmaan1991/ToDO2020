// moca syntax
describe("ul test for ToDo app", () => {

    it("vist staring page for app ", () => {
        cy.visit("http://localhost:8300/MainPage")

        cy.contains("Author:")

        cy.get("#author").type("hello {enter}")

        cy.get(".deleteHello").each(() => {
            cy.get(".deleteHello").first().click()
        })
    })
})

/*
        cy.get("#text")
            .type("pepparkaka") // vad skiver från input
            .should("have.value", "pepparkaka")
             cy.get("#buttonSave").click({
                 mutiple: true
             })
*/


/* cy.url()
     .should("include", "") /
     cy.url().should("", "")

 /*cy.get("").type("").should("", ) */

/* })

})*/