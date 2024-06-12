// it("Test POST Request", () => {
//     cy.request({
//         method: 'POST',
//         url: 'https://api.nnine.training/api/v1/dashboard/registerDetails',
//         body: {
//             'id': 2,
//             'title': 'Automation'
//         }
//     }).then((response) => { 
//         expect(response.body).to.have.property('title', 'Automation'); 
//     });
// });

describe("Testing API Endpoints Using Cypress", () => {

    it("Test GET Request", () => {
        cy.request('https://api.nnine.training/api/v1/dashboard/registerDetails')
            .then((response) => {
                expect(response.status).to.eq(201);
                // expect(response.body.data[0].title).to.equal('Expected Title');
                expect(response.body).to.be.an('array');
                expect(response.body[0]).to.have.property('email');
                // expect(response.body[0].email).to.equal('johncena.doe@example.com');
            });
    });
});