import type { CAC } from 'cac'

import { getPackages } from '@vue3-ts-vite-template/node-utils'
import depcheck from 'depcheck'

async function runDepcheck() {
  const { packages } = await getPackages()
  await Promise.all(
    packages.map(async (pkg) => {
      if (
        [
          '@vue3-ts-vite-template/backend-mock',
          '@vue3-ts-vite-template/commitlint-config',
          '@vue3-ts-vite-template/eslint-config',
          '@vue3-ts-vite-template/lint-staged-config',
          '@vue3-ts-vite-template/node-utils',
          '@vue3-ts-vite-template/novas',
          '@vue3-ts-vite-template/prettier-config',
          '@vue3-ts-vite-template/stylelint-config',
          '@vue3-ts-vite-template/tailwind-config',
          '@vue3-ts-vite-template/tsconfig',
          '@vue3-ts-vite-template/vite-config',
          '@vue3-ts-vite-template/vite-config',
        ].includes(pkg.packageJson.name)
      ) {
        return
      }

      const unused = await depcheck(pkg.dir, {
        ignoreMatches: [
          'vite',
          'vitest',
          'unbuild',
          '@vue3-ts-vite-template/tsconfig',
          '@vue3-ts-vite-template/vite-config',
          '@vue3-ts-vite-template/tailwind-config',
          '@types/*',
          '@vue3-ts-vite-template-core/design',
        ],
        ignorePatterns: ['dist', 'node_modules', 'public'],
      })

      // 删除file:前缀的依赖提示，该依赖是本地依赖
      Reflect.deleteProperty(unused.missing, 'file:')
      Object.keys(unused.missing).forEach((key) => {
        unused.missing[key] = (unused.missing[key] || []).filter((item: string) => !item.startsWith('/'))
        if (unused.missing[key].length === 0) {
          Reflect.deleteProperty(unused.missing, key)
        }
      })

      if (
        Object.keys(unused.missing).length === 0 &&
        unused.dependencies.length === 0 &&
        unused.devDependencies.length === 0
      ) {
        return
      }
      console.error(
        '\n',
        pkg.packageJson.name,
        '\n missing:',
        unused.missing,
        '\n dependencies:',
        unused.dependencies,
        '\n devDependencies:',
        unused.devDependencies,
      )
    }),
  )
}

function defineDepcheckCommand(cac: CAC) {
  cac
    .command('check-dep')
    .usage(`Analysis of project circular dependencies.`)
    .action(async () => {
      await runDepcheck()
    })
}

export { defineDepcheckCommand }
