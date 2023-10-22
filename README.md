Yo, willkommen bei Felo Docs. Hier kannst du die Seiten bearbeiten und ein Pull Request erstellen, damit ich deine Änderungen implementieren kann. Hier ein kleines Tutorial:

1. Lade dir Github Desktop [hier](https://desktop.github.com/) herunter.
2. Lade dir Visual Studio Code [hier](https://code.visualstudio.com/) herunter.
3. Lade dir Git [hier](https://git-scm.com/download/) herunter.
4. Öffne Github Desktop und melde dich mit deinem Github Account an.
5. Klicke auf "File -> Clone Repository" und Klicke auf "URL". Gebe dort "https://github.com/Felitendo/Docs" ein.
6. Klicke auf "clone" und warte bis es fertig mit clonen ist.
7. 


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
