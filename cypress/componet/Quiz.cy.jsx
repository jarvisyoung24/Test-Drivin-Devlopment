import Quiz from "../../client/src/components/Quiz";

describe("Quiz component", () => {
beforeEach(() => {
    cy.intercept('GET','/api/questions/random', {fixture: 'questions.json'}).as ('getQuestions');
});


  it("should display start quiz button when not started", () => {
    cy.mount(<Quiz />);
    cy.get("button").contains("Start Quiz").should("be.visible");
  });

    it("should display a question when started", () => {
        cy.mount(<Quiz />);
        cy.get("button").contains("Start Quiz").click();
        cy.wait('@getQuestions');
        cy.get(".alert").should("be.visible");
    });

    it("should display question answers", () => {
        cy.mount(<Quiz />);
        cy.get("button").contains("Start Quiz").click();
        cy.wait('@getQuestions');
        cy.get(".mt-3").children(".d-flex").should("have.length",4);
    });
});