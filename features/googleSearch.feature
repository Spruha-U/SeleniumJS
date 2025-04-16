Feature: Google Search
  Scenario: Search for something
    Given I open Google homepage
    When I search for "OpenAI"
    Then the page title should contain "OpenAI"
