describe('Desafio 1', () => {

    it('Desafio 1', () => {
        const numeroRandom = Math.floor(Math.random() * 1000);
        cy.visit('//');
        cy.get('[data-cy="user"]').type('caropit' + numeroRandom );
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[value="Female"]').check({force:true});
        cy.get('[data-cy="day"]').select('20');
        cy.get('[data-cy="month"]').select('April');
        cy.get('[data-cy="year"]').select('1992');
        cy.get('[data-cy="submitForm"]').click();
        cy.get('[data-cy="todolistlink"]').click();
        cy.get('[data-cy="task"]').type('desafio1');
        cy.get('[data-cy="sendTask"]').click();
        cy.wait(1000);
        cy.get('button').siblings('p').click();
    })

})


