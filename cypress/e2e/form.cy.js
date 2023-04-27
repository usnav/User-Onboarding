describe("Forms App", () => {
    beforeEach(() => {

        cy.visit("http://localhost:3000/");

    })
    
    const nameInput = () => cy.get("input[name=name]");
    const passwordInput = () => cy.get("input[name=password]");
    const emailInput = () => cy.get("[type='email']");
    const tos = ()=> cy.get("[type='checkbox']");
    const submitBtn = () => cy.get(`button[id="submitBtn"]`);
    const cancelBtn = () => cy.get(`button[id="cancelBtn"]`);

    it("the proper elements are showing", () => {
        nameInput().should("exist");
        passwordInput().should("exist");
        emailInput().should("exist");
        tos().should("exist");
        submitBtn().should("exist");
        cancelBtn().should("exist");
    })

    it("the checkbox is checked", () => {
        tos().check();
    })
    describe("Adding a new post", () => {
        it("can submit and delete a new post", () => {
            nameInput().type("UsnaRafiqzadah");
            passwordInput().type("ABC123");
            emailInput().type("fake@example.com")
            tos().check();
            submitBtn().click();
            cy.contains("UsnaRafiqzadah")
            .siblings("button:nth-of-type(2)")
            .click();
            cy.contains("UsnaRafiqzadah")
            .should("not.exist");
        })

        it("the submit button enables when all inputs are filled out and terms agreed checked validates form", () => {
            nameInput().type("UsnaRafiqzadah");
            passwordInput().type("ABC123");
            emailInput().type("fake@example.com");
            tos().check();
            submitBtn().should("not.be.disabled");
        })
    })

    












})