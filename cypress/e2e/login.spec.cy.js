import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameFild: "[name='username']",
    passwordFild: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFild).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar)
  })
  it('login - fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameFild).type(userData.userFail.username)
    cy.get(selectorsList.passwordFild).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})