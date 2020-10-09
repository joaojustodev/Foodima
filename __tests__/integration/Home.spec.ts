/// <reference types="cypress" />

context("Test home page performance", () => {
  it("should visit my home page", () => {
    cy.visit("/");
  });

  it("click in logo and redirect to /", () => {
    cy.get("a.logo").click();
    cy.location("pathname").should("include", "/");
  });

  it("hero section", () => {
    cy.get(".hero")
      .find("h1")
      .should("be.visible")
      .should("contain.text", "Receitas Saborosas");
    cy.get(".hero").find("p").should("be.visible");
    cy.get(".hero").find("a").should("be.visible");
    cy.get(".hero").find("img").should("be.visible");
  });

  it("click on see recipes and the page scroll behavior", () => {
    cy.get(".hero").find("a").click();
    cy.wait(1000);
    cy.url().should("include", "#recipes");
  });

  it("test search recipe input", () => {
    cy.get("input")
      .type("Sopa de legumes")
      .should("contain.value", "Sopa de legumes");
  });

  it("filter is not visible", () => {
    cy.viewport(360, 640);
    cy.get(".filter")
      .should("be.visible")
      .should("have.css", "opacity")
      .and("match", /0/);
  });

  it("should open and close filter menu", () => {
    cy.viewport(360, 640);
    cy.get(".filter-btn").click();
    cy.wait(1000);
    cy.get(".filter").should("have.css", "opacity").and("match", /1/);
    cy.get(".filter-btn").click();
    cy.wait(1000);
    cy.get(".filter").should("have.css", "opacity").and("match", /0/);
  });

  it("should return max 12 recipes", () => {
    cy.get(".recipes article").should("have.length", 12);
  });

  it("test btn load more recipes", () => {
    cy.get(".recipes div").last().should("contain.text", "VEJA MAIS RECEITAS");
  });
});

export {};
