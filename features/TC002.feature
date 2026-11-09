# To provide the manual steps/ testcases
Feature: TC002

# Test case description
Scenario: open application, login, logout and close application 

#Manual steps needs to be connect to the automation step, connectivity is provided using keywords(Gherkin)
Given open browser    
When enter url
When login into application
When logout of application
Then close application