/// <reference types="Cypress" />

context('End-to-end', () => {
  const username = 'little-kangaroo';
  const title = 'Tittel';

  before(() => {
    cy.visit('http://localhost:3000/');
  });

  it('front page contains an examination blurb', () => {
    cy.get('.examination-blurb')
      .first()
      .should('contain', title);
  });

  it('examination blurb button is clickable, the start page renders start button', () => {
    cy.get('.examination-startbutton')
      .first()
      .click();

    cy.get('.start')
      .first()
      .should('contain', 'Start');
  });

  it('start contains a navigation menu', () => {
    cy.get('.navBar')
      .first()
      .should('be.visible');
  });

  it('start button is clickable and renders username input', () => {
    cy.get('.start')
      .first()
      .click();

    cy.get('.h1')
      .first()
      .should('contain', 'Mitt navn er');
  });

  it('username input contains a navigation menu', () => {
    cy.get('.navBar')
      .first()
      .should('be.visible');
  });

  it('username is visible when typing', () => {
    cy.get('.inputField')
      .first()
      .type(username);

    cy.get('.username')
      .first()
      .should('contain', username);
  });

  it('username input button is clickable and renders copytext', () => {
    cy.get('.next')
      .first()
      .click();

    cy.get('.h1')
      .first()
      .should('contain', 'A, b: C.');
  });

  it('copytext contains a navigation menu', () => {
    cy.get('.navBar')
      .first()
      .should('be.visible');
  });

  it('copytext button is clickable and renders result', () => {
    cy.get('.inputField')
      .first()
      .type('A, b: C');

    cy.get('.next')
      .first()
      .click();

    cy.get('.inputField')
      .first()
      .type('.');

    cy.get('.next')
      .first()
      .click();

    cy.get('.h1')
      .first()
      .should('contain', 'Resultat')
      .and('contain', username);
  });

  it('result reflects what the user achieved', () => {
    const width = ['400px', '333.328125px'];
    cy.get('.filler').each(($el, i) => {
      cy.wrap($el).should('have.css', 'width', width[i]);
    });
  });

  it('result contains a navigation menu', () => {
    cy.get('.navBar')
      .first()
      .should('be.visible');
  });

  it('a reload brings you to start page', () => {
    cy.reload();
    cy.get('.examination-blurb')
      .first()
      .should('contain', title);

    // reload the page without using the cache
    //cy.reload(true)
  });
});
