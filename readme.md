# Feather.js Demo App

This is a demo project showcasing the usage of Feather.js, a lightweight web framework for building real-time applications.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository:

    ```bash
    git clone https://github.com/AssaultKoder95/feather-js-demo
    ```

2. Install the dependencies:

    ```bash
    cd feather-js-demo
    npm install
    ```

3. Start the server:

    ```bash
    npx ts-node src/index.ts
    ```

4. The application should be running on `http://localhost:4000`.

## API Usage

This demo project exposes a RESTful API for echoing data back to the client. Here's an example of how to use the API:

### Echo the sent data

Using the endpoint `localhost:4000/echo` with method specified as POST, when triggered with following data :

```json
{
	"loantube": "fintech firm",
	"location": "united kingdom",
	"developer": "Abhishek",
	"date": "2nd April 2024 - 2:30 am"
}

```

should return the same data to the user.

### Demo

https://github.com/AssaultKoder95/feather-js-demo/assets/6575313/70f5ac92-6785-418b-9432-f1f705995414

### Specifications

Modules used in the application with versions: 

```markdown
feathers": "5.0.24"
koa": "5.0.24"
```
