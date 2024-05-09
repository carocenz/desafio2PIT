//crear un test que permita registrarse en la pagina!
//Recorda usar npx cypress open para abrir la interfaz de usuario
//Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
describe("Actividad complementaria", () => {
    const numero = Math.floor(Math.random() * 1000)
    it.only('Actividad complementeria 1', () => {
        cy.visit('//');
        cy.get('[data-cy="user"]').clear();
        cy.get('[data-cy="user"]').type('pushingit1' + numero );
        cy.get('[data-cy="pass"]').type('123456*');
        cy.get('[value="Male"]').check({force:true});
        cy.get('[data-cy="day"]').select('4');
        cy.get('[data-cy="month"]').select('September');
        cy.get('[data-cy="year"]').select(10);
        cy.get('[data-cy="submitForm"]').click();
        cy.wait(5000);
        cy.get('[data-cy="todolistlink"]').should('exist');
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia seion'
describe("Actividad complementaria", () => {
    it.only('Actividad complementeria 1', () => {
        cy.visit('//');
        cy.get('[data-cy="registertoggle"]').dblclick();
        cy.get('[data-cy="user"]').type('pushingit');
        cy.get('[data-cy="pass"]').type('123456!');
        cy.get('[data-cy="submitForm"]'). click();
        cy.wait(5000);
        cy.get('[data-cy="todolistlink"]').should('exist');
    });
});




