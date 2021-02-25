describe('Add Todo', () => {
  beforeEach(() => {
    cy.visit('/todo');
  });
  it('When signed in and add valid todo, the todo should successfully save', () => {
    cy.contains('You do not have access to this page');

    cy.contains('Sign in').click();

    cy.url().should('include', 'auth0');
    cy.findByLabelText('Email')
      .type('todoCypressTestEmail1@hotmail.com')
      .should('have.value', 'todoCypressTestEmail1@hotmail.com');

    cy.findByLabelText('Password')
      .type('Password1234')
      .should('have.value', 'Password1234');

    cy.get('form').submit();

    cy.contains('My Todos');

    var title = 'Cypress Title 1';
    var description = 'Cypress Description 1';
    var deadline = '2051-02-23';
    cy.findByLabelText('Title').type(title).should('have.value', title);
    cy.findByLabelText('Description')
      .type(description)
      .should('have.value', description);
    cy.findByLabelText('Deadline')
      .type(deadline)
      .should('have.value', deadline);

    cy.contains('Add Todo').click();
    cy.contains('Success!');

    cy.contains('Sign Out').click();
    cy.contains('You successfully signed out!');
  });
});
