it("Test POST Request", () => {
    cy.request({
        method: 'POST',
        url: 'https://api.nnine.training/api/v1/dashboard/registerDetails',
        body: {
            'email': "hellotest.@gmail.com",
            'name': 'Hello World',
            'phone':'9857452155',
            "levelOfEducation":"Bachelor's Degree",
            "courses":["MERN"],
            "schoolCollegeName":"Example University",
            "message":"Looking forward to starting the new semester!",
            
        }
    })
    .then((response) => { 
        expect(response.status).to.eq(200); 
    });
});

describe("Testing API Endpoints Using Cypress", () => {

    it("Test GET Request", () => {
        cy.request('https://api.nnine.training/api/v1/dashboard/registerDetails')
            .then((response) => {
                expect(response.status).to.eq(201);

                // cy.log(JSON.stringify(response.body));
                expect(response.body).to.be.an('array');
                
                response.body.forEach(user => {
                    expect(user).to.have.property('email');
                    // cy.log(`Found email: ${user.email}`);
                    cy.log("hellotest.@gmail.com")
                });
            });
    });
});