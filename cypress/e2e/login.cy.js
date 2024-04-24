
describe('Автотесты для формы авторизации', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})

 it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio5');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })


it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnik.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })


    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnik.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})        


 it('Проверка на приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type(' GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible')
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})        

})

