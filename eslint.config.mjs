import antfu from '@antfu/eslint-config'
import pluginRouter from '@tanstack/eslint-plugin-router'

export default antfu({
  react: true,
  stylistic: {
    indent: 2,
  },
  ignores: [
    '*.md',
    '**/*.gen.ts',
  ],
  ...pluginRouter.configs['flat/recommended'],
})
