# frontend-project-starter

A starter template for frontend project with commit lint.

## Features

- [x] ESLint
- [x] StyleLint
- [x] commitlint
- [x] husky
- [x] lint-staged
- [x] commitizen
- [x] conventional-changelog

## Init commitlint

https://commitlint.js.org/#/guides-local-setup

```shell
$ pnpm add -D @commitlint/{config-conventional,cli}
$ echo "module.exports = { extends: ['@commitlint/config-conventional'] }" > commitlint.config.js
```

## Init husky

https://typicode.github.io/husky/getting-started.html

```shell
$ pnpm dlx husky-init && pnpm install
$ pnpm husky add .husky/commit-msg 'pnpm commitlint --edit "$1"'
```

Edit `.husky/pre-commit`:

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged --allow-empty "$1"
```

## Init cz

http://commitizen.github.io/cz-cli/

```shell
$ pnpm add -D commitizen cz-conventional-changelog
```

Touch `.czrc`:

```json
{
  "path": "cz-conventional-changelog"
}
```

Touch file `.husky/prepare-commit-msg`:

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

exec < /dev/tty && pnpm cz --hook || true
```
