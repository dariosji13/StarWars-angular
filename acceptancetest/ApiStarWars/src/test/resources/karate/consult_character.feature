Feature: We want to test the Star Wars API to verify that it loads the desired character and their vehicles, if available.

  Scenario Outline: The correct answer to the character query was tested
    Given url "https://swapi.dev/api" +"/people/?search=<name>"
    When method get
    Then status <status>
    And match response.results[0].name == <responseName>
    And match response.results[0].height == <height>
    And match response.results[0].mass == <mass>
    And match response.results[0].hair_color == <hair_color>
    And match response.results[0].skin_color == <skin_color>
    And match response.results[0].eye_color == <eye_color>
    And match response.results[0].birth_year == <birth_year>
    And match response.results[0].vehicles == <urlVehicles>
    Examples:
      | name   | status | responseName       | height | mass | hair_color | skin_color | eye_color | birth_year | urlVehicles                                                                 |
      | yoda   | 200    | 'Yoda'             | '66'   | '17' | 'white'    | 'green'    | 'brown'   | '896BBY'   | []                                                                          |
      | anakin | 200    | 'Anakin Skywalker' | '188'  | '84' | 'blond'    | 'fair'     | 'blue'    | '41.9BBY'  | ["https://swapi.dev/api/vehicles/44/","https://swapi.dev/api/vehicles/46/"] |

  Scenario Outline: Testing the response to characters do not exist
    Given url "https://swapi.dev/api" +"/people/?search=<name>"
    When method get
    Then status <status>
    Then match response.results == <response>
    Examples:
      | name    | status | response |
      | armando | 200    | []       |
      | **      | 200    | []       |
      | 1245697 | 200    | []       |

