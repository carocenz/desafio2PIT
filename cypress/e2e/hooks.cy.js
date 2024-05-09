describe('Hooks', () => {
    let tareas;

    before('Before', () => {
        tareas = { //objeto
            "tarea1": "Hacer la cama",
            "tarea2": "Limpiar el piso"
        };

    })

    beforeEach('BeforeEach', () => {
        cy.log('Entrar al url')
        cy.log('Iniciar sesión')
        cy.log('Visitar al módulo to do list')
    })

    it('Prueba 1', () => {
        cy.log('Agregar una tarea al to do list')
        cy.log('Validar que la tarea se agregó correctamente')
        cy.log(`Asignar la tarea ${tareas.tarea1} al módulo to do list`) //llama a la tarea 1 dentro del objeto tareas
        cy.log(`Asignar la tarea ${tareas.tarea2} al módulo to do list`) //llama a la tarea 2 dentro del objeto tareas
    })

    it('Prueba 2', () => {
        cy.log('Agregar una tarea al módulo to do list')
        cy.log('Eliminar una tarea del to do list')
        cy.log('Validar que la tarea se eliminó correctamente')
    })

})