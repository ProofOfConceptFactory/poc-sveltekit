Hello from SvelteKit!👋
========================

The "Hello from SvelteKit!👋" application is just a starter to show a minimalist SvelteKit app.

Requirements
------------

* [Docker Desktop][1]

Installation
------------

Clone this repository:

```console
https://github.com/ProofOfConceptFactory/poc-sveltekit
```

Go on the project root folder:

```console
cd poc-sveltekit/
```

Execute this command to launch docker container in dev:

```console
docker compose -f docker/compose.yaml up -d --build
```

Install JavaScript dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm install
```

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Run this command:

```bash
docker compose -f docker/compose.yaml exec node pnpm run dev
```

Then access the application in your browser at the given URL (<http://localhost:8000> by default).

**Option 2. Run the application in prod mode**

```bash
docker compose -f docker/compose.yaml exec node pnpm run build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by running:

```bash
docker compose -f docker/compose.yaml exec node pnpm run preview
```

Tests
-----

Install Cypress dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress install
```

Execute this command to run tests:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress run
```

[1]: https://www.docker.com/products/docker-desktop/
