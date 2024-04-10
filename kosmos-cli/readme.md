# Kosmos CLI
Provide an masked nest.js command to generete sub-apps within nest monorepo

## Requirements
Add to the next option in __scripts__ section in __package.json__.
```json
 {
    ...
    "scripts": {
        ...
        "generate:scaffold": "name=${npm_config_name} && cd apps/${name} && mkdir -p src/application/dtos src/application/services src/controllers/ src/domain/entities src/domain/repositories src/domain/services src/interfaces/controllers src/interfaces/resolvers"
    }
 }
```

## Install
1. Copy into monorepo root folder
2. Move to kosmos-cli
    ```bash
    $ cd kosmos-cli
    ```
3. Link kosmos-cli folder
    ```bash
    $ npm link
    ```
4. install globaly
    ```bash
    $ npm install -g .
    ```

## Usage
This cli provide only one command at the moment, generate sub-app.

```bash
kosmos-cli sub-app my_subapp
```
