describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:58705/pizzaform/")
    })

    const nameInput = () => cy.get('input[name=name]')
    const checkbox = () => cy.get('input[type="checkbox"]')
    const selectSauce = () => cy.get('input[type="radio"]')
    const submitBtn = () => cy.get('form')

    it("Input Name into the Name Input", () => {
        cy.get('input[name="name"]').type("Alejandro Vasquez").should("have.value", "Alejandro Vasquez");
    })
    it("Click Terms and Service Checkbox", () => {
        cy.get('input[type="checkbox"]').check().should("be.checked");
    })
    describe("Submitting Form", () => {
        it('can submit a new form', () => {
            nameInput().type('Alejandro Vasquez')
            selectSauce().check()
            checkbox().check()
            submitBtn().click()
        })
})
})