Feature: A feature for creating and managing todos

Scenario: 
    Given I am on the todos page
    When I click the new todo button
    Then The new todo dialog should open
    When I enter details for a new todo
        And Click the save button