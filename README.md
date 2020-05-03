## Description

    1. The given daily_14.json has a erroneous json structure. This project solves the problem, and converts the invalid json to a valid json that can be used by the client.
    2. The daily_14.json is be filtered out into daily.json to optimise data that is been sent over to the client-side.
    3. Since this data is a static data (not a real-time frequently changing data) containing city names, which itself is a not so large set, so either hosting it on the server-side or using it on the client-side directly also makes sense.
    4. Since the project had to be build in React/Angular, I took the liberty of converting it.
    5. So the project converts the invalid structure to a valid one by running the below command.
    6. The same can be automated as well on the server-side and the client-side can request for the same via a REST endpoint. 
    7. The project is a pure node.js implementation without any external dependencies

## Available Scripts

In the project directory, you can run

    $ yarn
    $ node index.js

## Author

* **Chetan Jain** - (https://github.com/chetan-plrch)
