describe('Selectores', () => {
    
    it('Encontrando selectores con cssSelector', () => {
        cy.visit('//');
        cy.get('button');
        cy.get('input');
        cy.get("[type='password']");
        cy.get("[type='text']");
        cy.get("[type='radio']");
        cy.get('#user'); //unicamente para el atributo ID
        cy.get('.password'); //unicamente para el atributo clase
        cy.get('[class="chakra-input password css-8nr8rm"]');
        cy.get('[id^="user_pushingit_"]'); //para cuando el user comience con x valor
        cy.get('[id*="user_pushingit_"]'); //para cuando el user contiene x valor
        cy.get('[id$="pushingit_5"]'); //para cuando el id termina con x valor
    })

    it('find', () => {
        cy.visit('')
        cy.get('form').find('input')
        cy.get('form').find('.chakra-image') //no lo encuentra porque la clase chakra-image no está dentro del formulario (form)
    })

    it('contains', () => {
        cy.visit('')
        cy.contains('label', 'User').siblings('input').type('pushingit') //contains + parentezco (hermanos, padre o hijo)
    })

    it.only('eq', () => {
        cy.visit('')
        cy.get('input').eq(0)
        cy.get('input').eq(4)
    })

    it.only('first', () => {
        cy.visit('')
        cy.get('input').first();
    })

    it.only('last', () => {
        cy.visit('')
        cy.get('input').last();
    })

    it.only('next', () => {
        cy.visit('')
        cy.get('input').next();
    })

    it.only('prev', () => {
        cy.visit('')
        cy.get('input#user').prev();
    })

})