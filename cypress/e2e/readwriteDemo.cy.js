before(function(){
  cy.fixture('example.json').as('test_data')
})

it("read files using fixture", () => {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.body);
    cy.log(data.email);
  });
});

it("read file using readFile()",()=>{
  cy.readFile('./cypress/fixtures/example.json').then((info)=>{
    cy.log(info.name)
    cy.log(info.email)
  })
  
})

it("write file using writeFile()",()=>{
  cy.writeFile('sample.txt',"Hello World Sudha is Here\n")
  cy.writeFile('sample.txt',"I am learning UI automation using Cypress",{flag:'a+'})
})
