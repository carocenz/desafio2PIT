describe('Primer Test', () => {

    it('Debería permitir al usuario registrarse en Pushing IT', () => {
        const numeroRandom = Math.floor(Math.random() * 1000);
        cy.visit('//');
        cy.get('[data-cy="user"]').clear;
        cy.get('[data-cy="user"]').type('pushingit1' + numeroRandom );
        cy.get('[data-cy="pass"]').type('123456*');
        cy.get('[value="Male"]').check({force:true});
        cy.get('[data-cy="day"]').select('4');
        cy.get('[data-cy="month"]').select('September');
        cy.get('[data-cy="year"]').select(10);
        cy.get('[data-cy="submitForm"]').click();
        cy.wait(5000);
        cy.get('[data-cy="todolistlink"]').should('exist');
    })
    
})