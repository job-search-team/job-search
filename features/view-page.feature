Feature: View results based on keyword

  @watch
  Scenario: I want to see all the people
    Given I am viewing the page at "/"
    When I enter "wellington" into the "Enter keyword" input
    And I click on the input with value "Find"
    Then I am redirected to the "/job-search/wellington" page
