describe ('Xpath', () => {
    
    it('Encontrar un elemento web utilizando xpath absoluto', () => {
        cy.visit('')
        cy.xpath('/html/body/div[1]/div/div/div/form/div[2]/input')
    })

    it('Encontrar un elemento web utilizando xpath relativo', () => {
        cy.visit('')
        cy.xpath("//input[@id='user']")
    })

    it('Encontrar un elemento web utilizando xpath contains (forma parcial)', () => { //el valor puede estar en cualquier lugar
        cy.visit('')
        cy.xpath("//input[contains(@class, 'password')]")
    })

    it('Encontrar un elemento web utilizando xpath starts-with', () => { //el valor tiene que empezar a escribirse de cierta forma
        cy.visit('')
        cy.xpath("//input[starts-with(@class, 'chakra-input p')]")
    })

    it('Encontrar un elemento web utilizando xpath text', () => { //la palabra tiene que existir visiblemente en el texto de la página
        cy.visit('')
        cy.xpath("//button[text()='Register']")
    })


    it('Combinación de starts-with con text', () => { //la palabra tiene que existir visiblemente en el texto de la página
        cy.visit('')
        cy.xpath("//p[starts-with(text(), 'Si ya estás registrado')]")
    })


    it('Combinación de contains con text', () => { //la palabra tiene que existir visiblemente en el texto de la página
        cy.visit('')
        cy.xpath("//p[contains(text(), 'Si ya estás')]")
    })

    it('Encontrar un elemento web utilizando xpath descendent', () => { // = a find en cypress. permite buscar a cualquier hijo en cualquier nivel
        cy.visit('')                                                   // hacia abajo.
        cy.xpath("//fieldset//descendant::input[@value= 'Male']")
    })

    it('Encontrar un elemento web utilizando xpath ancestor', () => { // permite buscar a cualquier padre hacia arriba. = a parents en cypress
        cy.visit('')                                                 // (que también permite buscar entre todos los parents hacia arriba.
        cy.xpath("//input[@value= 'Male']//ancestor::fieldset")      // no confundir con parent de cypress que solo permite buscar un solo nivel hacia arriba)
    })

    it('Encontrar un elemento web utilizando xpath child', () => { // = a children en cypress. permite buscar a cualquier hijo más próximo.
        cy.visit('')                                              // permite buscar en un solo nivel hacia abajo. hijo directo.
        cy.xpath("//label//child::input[@value='Male']")
    })

    it('Encontrar un elemento web utilizando xpath parent', () => { // = a parent en cypress. permite buscar a cualquier padre más próximo.
        cy.visit('')                                              // permite buscar en un solo nivel hacia arriba. padre directo.
        cy.xpath("//input[@value= 'Male']//parent::label")
    })

    it.only('Encontrar un elemento web utilizando xpath following-sibling', () => { 
        cy.visit('')                                              
        cy.xpath("//label[@for='user']//following-sibling::input") // = cy.xpath("//label//following-sibling::input[@id='user']")
    })

    it.only('Encontrar un elemento web utilizando xpath preceding-sibling', () => { 
        cy.visit('')                                              
        cy.xpath("//input[@id= 'user']//preceding-sibling::label")
    })



})