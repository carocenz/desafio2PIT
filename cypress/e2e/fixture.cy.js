describe('Fixture', () => {
    let data;

    before('Before', () => {
        cy.fixture('datosFixture').then(datos => {
            data = datos;
        })

    })

    beforeEach('BeforeEach', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
        cy.wait(1200)
        cy.get('#removeAll').click();
    })

    it('Prueba 1', () => {
        cy.get('#task').type(data.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.contains('p', data.tareas.tarea1);
    })

    it('Prueba 2', () => {
        cy.get('#task').type(data.tareas.tarea2);
        cy.get('#sendTask').click();
        cy.contains('p', data.tareas.tarea2).siblings('button').click();
        cy.contains('p', data.tareas.tarea2).should('not.exist');
    })

})