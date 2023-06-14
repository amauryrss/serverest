describe ('API testing', () => {
    const faker = require('faker-br');
    let userId="";    
    let email = ''
  
    before(() => {
  
      email = faker.internet.email()
         
  
    });
    
         
    it('Posting Valid User', () => {
        cy.fixture('user').then((user) => {
            cy.postValidUsers(user.name,email, user.password, user.admin)

        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                userId = response.body._id.toString()

            })  
        
    })

    it('Posting User With Email Taken', () => {
        cy.fixture('user').then((user)=>{

            cy.postUsersEmailTaken(user.name, email, user.password, user.admin)
                    
        })  .then((response)=>{
                expect(response.status).to.eq(400)
                expect(response.body.message).to.eq('Este email já está sendo usado')                                
        
            })
    })    
       
    it('Getting User', () => {
        cy.fixture('user').then((user) => {
 
            cy.getUser(userId).then((response)=>{
    
                expect(response.status).to.eq(200)
                expect(response.body.nome).to.equal(user.name)
                                
            })   
        })
        
    })

   it('Updating Valid User', () => {
        cy.fixture('user').then((user)=>{

            cy.updateUserInfo(userId, user.name, email, user.admin)
                .then((response)=>{    
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq('Registro alterado com sucesso')
                    cy.log(JSON.stringify(response))
                })

        })              
    }) 

    it('Deleting User', () => {
        

        cy.deleteUser(userId)
            .then((response)=>{    
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq('Registro excluído com sucesso')
                                                                                
            }) 
                       
    })
})

