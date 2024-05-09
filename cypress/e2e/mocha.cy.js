describe('Mocha', () => {
    const alumna = 'Caro'
    const dia = '1'

    //variable definida dentro del describe y fuera del it
    it('Primer Test', () => {
        cy.log('Primer Test de ' + alumna + ' el día ' + dia)

    });

    //variable definida dentro del it
    it('Segundo Test', () => {
        const dia = '2'
        cy.log('Segundo Test de ' + alumna + ' el día ' + dia)
    });

    //variable definida dentro del it
    it('Tercer Test', () => {
        const dia = '3'
        cy.log('Tercer Test de ' + alumna + ' el día ' + dia)
    });

    //variable definida dentro del it
    it('Cuarto Test', () => {
        const dia = '4'
        cy.log('Cuarto Test de ' + alumna + ' el día ' + dia)
    })
});


//fail porque alumna y dia son undefined
describe('Mocha', () => {
    it('Primer Test', () => {
        cy.log('Primer Test de ' + alumna + ' el día ' + dia)
    });
})