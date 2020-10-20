# Sirena Base App

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Basic structure](#basic-structure)
- [ToDo's](#todos)

## Installation

Use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install all dependencies.

```bash
npm i
```

Start the app using

```bash
npm run local
```

---

#### Client App will be mounted on `http://localhost:3000/client`

#### Server App will be mounted on `http://localhost:4032/api`

---

### Basic structure

```
      server.js
      package.json         // server deps and scripts
      src/
          errors/
          models/
          services/
          public/
          ...
      config/
            default.yml
            ...
      client/
          src/
              App.js
              index.js
              App.css
              ...
              package.json         // client deps and scripts
        .../
        .../
```

### Todos

- Add docs regarding Integration and their types
- Add SDK to connect to Sirena API
- Linter
- Sections
  - Deployment
  - Testing
