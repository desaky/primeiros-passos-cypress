describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameFild: "[name='username']",
    passwordFild: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type('Admin')
    cy.get(selectorsList.passwordFild).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFild).type('test')
    cy.get(selectorsList.passwordFild).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})