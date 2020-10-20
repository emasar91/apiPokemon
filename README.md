# Pokemon Api

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Basic structure](#basic-structure)

## Installation

Use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install all dependencies.

```bash
npm i
```

Start the app using

```bash
npm start
```

---


#### Server App will be mounted on `http://localhost:4032/api`

---

### Basic structure

```
      server.js
      package.json         // server deps and scripts
      config/
      src/
          errors/
          init/
          models/
          public/
            api/
            routers/
          services/
            abilitie/
            pokemon/
          utils/
```