///<reference types="@cypress/xpath"/>
///<reference types="Cypress"/>

describe('project', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        
    it('login/logout functionality', () => {
        
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        
        //click on login/signup button
        cy.xpath('//button[@class="auth px-3 me-2 border fw-semibold bg-black text-white rounded"]').click({force: true})
        cy.wait(3000)
        
        // logout
        cy.xpath('//button[@class="btn btn-danger"]').click({force: true})
        cy.wait(2000)
        // click again on login/signup button
        cy.xpath('//button[@class="auth px-3 me-2 border fw-semibold bg-black text-white rounded"]').click({force: true});
        // enter email id
        cy.xpath('//input[@class="rounded w-75 p-1 px-2 mx-4 m-3"]').type('kanishchaddha1999@gmail.com',{force: true});
        
        // enter password
        cy.xpath('//input[@placeholder="Enter Password"]').type('kanish123',{force: true})

        // click on submit
        cy.xpath('//input[@value="Submit"]').click({force: true});
        
        // there is a bug in login functionality 
        //the user is automatically login without clicking on login so first he/she can click on logout
    });
    it('Search textfield', () => {
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        // search for products
        cy.xpath('//input[@placeholder="Search for Products..."]').type('apple',{force: true});

            
    });
    it('Select location', () => {
        //visit the url 
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        // click on select location button
        cy.xpath('//i[@class="fa-solid fa-location-dot"]',{ timeout: 10000 }).should('be.visible').click()
    
    
        //cy.get(".second-bar").select('Fruits & Vegetables');
        //cy.get('.fa-location-dot').click()
    });
    it('Homepage', () => {
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        // click on most purchased products available on the homepage
        cy.xpath("(//*[contains(text(),'Organic Brown Rice')])[1]").click({force: true})
        cy.wait(1000)
        // click on add button
        cy.xpath('(//button[@class="addButton"])[1]').click({force: true});
        
    });
    it('Shop by category', () => {
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        // click on dropdown we are not using select function here because it is not working 
        cy.xpath('//div[@class="category dropdown"]').click({force:true})
        // click on beverages from the dropdown list
        cy.xpath("(//*[contains(text(),'Beverages')])[1]").click({force:true})
        // Then another page opens up then again click on beverages
        cy.xpath('//a[@data-category="Beverages"]').click({force:true})
    });
    it('about us', () => {
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        // click on about us button
        cy.xpath("//*[contains(text(),'About us')]", { timeout: 10000 }).should('be.visible').click();

    });
    it('Contact us', () => {
        // visit the url
        cy.visit('https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/index.html');
        //click on contact us page
        cy.contains('Contact Us').click({force:true})
        cy.wait(2000)
        // enter name in the name textfield of contact Us page
        cy.get('input[placeholder="Name"]').type('jh89jkji',{force:true})
        // enter email id in the email textfield of contact Us page
        cy.get('input[placeholder="Email"]').type('ikksj56@gmail.com',{force:true})
        // enter phone number in the phone textfield of contact Us page
        cy.get('input[placeholder="phone"]').type('900988889788889989',{force:true})
        // enter address in the Address textfield of contact Us page
        cy.get('input[placeholder="Address"]').type('hno-4rt 7ghhjh',{force:true})
        // enter message in the message textfield of contact Us page
        cy.get('input[placeholder="Message"]').type('jjkkiii',{force:true})
        // click on submit button after filling all the details
        cy.get('input[placeholder="submit"]').click({force:true})
    });
});
