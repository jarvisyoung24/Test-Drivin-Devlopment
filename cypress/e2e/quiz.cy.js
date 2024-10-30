describe("Quiz e2e testing",() => {
    beforeEach(() => {
        cy.visit('/')
        cy.intercept('GET','/api/questions/random', {fixture: 'questions.json'}).as ('getRandomQuestions');
    });

    it("should display start quiz button when not started", () => {
        cy.get("button").contains("Start Quiz").should("be.visible");
    });

    it("should display a question when start quiz clicked", () => {
        cy.get("button").contains("Start Quiz").click();
        cy.wait('@getRandomQuestions');
        cy.get(".card").should("be.visible");
        cy.get(".card").within(() => {
            cy.get("h2").should("exist");
            cy.get(".d-flex").should("have.length",4);
        })
    });
    
    it("should handle complete quiz flow", () => {
        cy.get("button").contains("Start Quiz").click();
        
        cy.fixture('questions.json').then(questions => {
            cy.wait('@getRandomQuestions');
            // questions.forEach(question => {
            //     cy.get(".card").within(() => {
            //         cy.get("h2").should("exist");
            //         cy.get(".d-flex").should("have.length",4);
            //         cy.get(".d-flex").each((answer,index) => {
            //             if (answer.isCorrect) {
            //                 cy.findByText(`${index+1}`).click();
            //             }
            //         })
            //     })
                
            // })
            for (const quiz of questions) {
                cy.get(".card").within(() => {
                    cy.get("h2").should("exist");
                    cy.get(".d-flex").should("have.length",4);
                    const correctAnswer = quiz.answers.map((answer,index) => {
                        if (answer.isCorrect) {
                            return index;
                        }
                    }).indexOf(true) +1
                    cy.get('.btn').contains(`${correctAnswer+1}`).click();
                })
            }
            
            cy.get('.card').should('exist');
            cy.get('h2').contains('Quiz Completed').should('exist');
             cy.get('.alert-success').should('exist');
             cy.get('button').contains('Take New Quiz').should('exist');
        })
     
        
    });
})