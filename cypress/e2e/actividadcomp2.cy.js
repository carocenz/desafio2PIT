//Modifica todos los selectores para obtener los mismos elementos web pero con rutas diferentes

describe("Actividad complementaria2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria1', () =>{
    cy.visit('https://pushing-it.vercel.app');
    cy.get('input#user').type('pushingit' + numero);
    cy.get('input#pass').type('123456!');
    cy.get('[role="radiogroup"]').find('[value="Female"]').check({force: true});
    cy.get('[role="group"]').children().children('[data-cy="day"]').select('3');
    cy.get('[data-cy="month"]').select('August');
    cy.get('input').eq(4)
    cy.get('[data-cy="year"]').select('1988');
    cy.get('[data-cy="submitForm"]').click();
    });
   });