# Devlab / Devinci Startup Prestagile

## Fonctionnement des CI/CD

<code>Path des fichiers: .github/workflows</code>

L'application est déployé sur heroku, il y a deux fichiers de déploiement **procibo** et **preprodcibo**:

Les deux sont déployés sur heroku et les config sont très semblables la première listen sur la branch **preprod** et l'autre sur **main**.
Les fichiers de configuration comprennent entre autre le lancement des tests (package.json à modifier quand les tests unitaires seront rédigés une fois que l'application sera un peu plus avancé).

## Fonctionalités de la CI

Linter automatique, le linter vérifie la code base quelque soit le langage utilisé afin d'assurer la structure du code.

Jest permet de lancer les tests le processus de déploiement ne se lance pas tant que les tests, le build et le linter ne soient finit.
Une fois que la codebase est validé le déploiement sur heroku est automatiquement lancé.
