describe("cloudengage",  () => {
    it("test:1" , () =>{
        cy.visit("https://go.ice2.cloudengage.com/")
        cy.contains("Welcome Back").should("be.visible")
    })
    it("test:1" , () =>{
        cy.visit("https://chord.us/")
        cy.contains("Claim my domain!").should('be.visible')
    })
})