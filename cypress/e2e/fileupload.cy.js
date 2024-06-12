/// <reference types='cypress'/>

import 'cypress-file-upload'

beforeEach(function(){
    cy.visit('https://trytestingthis.netlify.app/')
})

describe("File upload and download with Cypress",()=>{
    it("upload a file",()=>{
        cy.get('#myfile').attachFile('robot.jpg')
    })

})

it("Long Paragraph",()=>{
    cy.get('textarea').type("The cat was palying in the garden. Suddenly an alien appeared in the sky and took the cat with him because the cat was cute")
})