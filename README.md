# Simple repro project for vue-jest coverage issue

### Setup

```shell
git clone git@github.com:meufel/vue-jest-coverage-repro.git
npm ci
```

### Reproduction steps

```shell
npm run test
```

or just open **./src/Example.vue** and compare the content with the coverage of **./tests/coverage/index.html**.
