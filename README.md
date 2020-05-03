## Title
    Weather data converter

## Description

    The given daily_14.json has a erroneous json structure. This project solves the problem, and converts the invalid json to a valid json that can be used by the client.The daily_14.json is be filtered out into daily.json to optimise data that is been sent over to the client-side.
    
    Since this data is a static data (not a real-time frequently changing data) containing city names, which itself is a not so large set, so either hosting it on the server-side or using it on the client-side directly also makes sense. Since the project had to be build in React/Angular, I took the liberty of converting it.

    So the project converts the invalid structure to a valid one by running the below command. The same can be automated as well on the server-side and the client-side can request for the same via a REST endpoint.The project is a pure node.js implementation without any external dependencies

## Available Scripts

To start the project, you can run

    $ yarn
    $ node index.js

## Author

* **Chetan Jain** - (https://github.com/chetan-plrch)
