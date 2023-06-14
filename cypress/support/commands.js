Cypress.Commands.add('postValidUsers', (name, mail, password, admin) => {
    
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            headers: {
            
         'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZGV6ZXNzZWlzQG1haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY4NjYyMzE0MywiZXhwIjoxNjg2NjIzNzQzfQ.PiBYcFfJZI3fWxHXs_PkHKM2W2dUYYwrx_3qsSJwFgI"
            },
            body: {
          "nome": name,
          "email": mail,
          "password": password,
          "administrador": admin
            }

        })      
                   
        
})

Cypress.Commands.add('postUsersEmailTaken', (name, email, password, admin) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode:false,

        headers: {
        
     'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZGV6ZXNzZWlzQG1haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY4NjYyMzE0MywiZXhwIjoxNjg2NjIzNzQzfQ.PiBYcFfJZI3fWxHXs_PkHKM2W2dUYYwrx_3qsSJwFgI"
        },
        body: {
            "nome": name,
            "email": email,
            "password": password,
            "administrador": admin
        }

    })            
    
})

Cypress.Commands.add('updateUserInfo', (userId, name, userEmail, admin) => {
    
    cy.request({  
        method: 'PUT',
        url: 'https://serverest.dev/usuarios/'+userId,
        headers: {
            
            'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZGV6ZXNzZWlzQG1haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY4NjYyMzE0MywiZXhwIjoxNjg2NjIzNzQzfQ.PiBYcFfJZI3fWxHXs_PkHKM2W2dUYYwrx_3qsSJwFgI"
            },
            body: {
                "nome": name,
                "email": userEmail,
                "password": 'senha atualizada',
                "administrador": admin
            }
                                                                       
    }) 
         
       
})

Cypress.Commands.add('getUser', (userId) => {
    
        cy.request({  
            method: 'GET',
            url: 'https://serverest.dev/usuarios/'+userId,
            headers: {
            
                'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZGV6ZXNzZWlzQG1haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY4NjYyMzE0MywiZXhwIjoxNjg2NjIzNzQzfQ.PiBYcFfJZI3fWxHXs_PkHKM2W2dUYYwrx_3qsSJwFgI"
            }            
    
            }) 
         
       
})

Cypress.Commands.add('deleteUser', (userId) => {
    
        cy.request({  
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/'+userId,
            headers: {
            
                'authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZGV6ZXNzZWlzQG1haWwuY29tIiwicGFzc3dvcmQiOiJ0ZXN0ZSIsImlhdCI6MTY4NjYyMzE0MywiZXhwIjoxNjg2NjIzNzQzfQ.PiBYcFfJZI3fWxHXs_PkHKM2W2dUYYwrx_3qsSJwFgI"
            }            
    
        })        
       
})



