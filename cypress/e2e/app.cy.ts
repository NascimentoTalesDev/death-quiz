class LoginForm {
  elements = {
    emailInput: () => cy.get("[name='email']"),
    passwordInput: () => cy.get('[type="password"]'),
  }

  typeEmail(text: string){
    if(!text) return;
    this.elements.emailInput().type(text)
  };

  typePassword(text: string){
    if(!text) return;
    this.elements.passwordInput().type(text)
  }

}
const loginForm = new LoginForm();

describe('Login Page', () => {
  
  describe('Submit Login ', () => {
    const input ={
      email: '',
      password: '',
    }
    it('Entrar no site', () => {
      cy.visit('/')
    }),
    it(`When i enter "${input.email}" in the email field`,() => {
      loginForm.typeEmail("testemail.com")
    }),
    it(`When i enter "${input.password}" in the password field`,() => {
      loginForm.typePassword("minhasenha")
    }),
    it(`Todo anything`,()=>{}),
    it(`Todo anything`,()=>{}),
    it(`Todo anything`,()=>{})
  })
})