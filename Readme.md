## Svelte testing project with scss as default styling

#### This project is purpose to reproduce the issue

### To run test
```sh
yarn && yarn test
```

### Error Info
```sh
Colon is expected
19:     border-radius: 2px;
20: 
21:     span {
             ^
22:       font-weight: bold;
23:     }
 FAIL  __test__/Button.test.js
  ● Test suite failed to run

    ParseError: Colon is expected

      at error (node_modules/svelte/src/compiler/utils/error.ts:25:16)
      at Parser$1.error (node_modules/svelte/src/compiler/parse/index.ts:101:3)
      at Object.read_style [as read] (node_modules/svelte/src/compiler/parse/read/style.ts:31:11)
      at tag (node_modules/svelte/src/compiler/parse/state/tag.ts:189:27)
      at new Parser$1 (node_modules/svelte/src/compiler/parse/index.ts:53:12)
      at parse (node_modules/svelte/src/compiler/parse/index.ts:218:17)
      at Object.compile (node_modules/svelte/src/compiler/compile/index.ts:94:14)
      at compiler (node_modules/svelte-jester/dist/transformer.cjs:135:32)
      at Object.processSync [as process] (node_modules/svelte-jester/dist/transformer.cjs:111:12)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:612:31)
```