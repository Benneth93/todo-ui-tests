Feature: A feature for creating and managing todos

Scenario: 
    Given I am on the todos page
    When I click the new todo button
    Then The new todo dialog should open
    When I enter details for a new todo
        And I Click the save button
    Then I check the todo exists in the database
        And The todo card exists on the webpage
    When I click the edit button
    Then The edit dialog should open
    
    