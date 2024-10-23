import { colors, consola } from '@vue3-ts-vite-template/node-utils'
import { cac } from 'cac'

import { defineCheckCircularCommand } from './check-circular'
import { defineDepcheckCommand } from './check-dep'
import { defineCleanCommand } from './clean'
import { defineLintCommand } from './lint'

try {
  const novas = cac('novas')

  // novas lint
  defineLintCommand(novas)

  // novas clean
  defineCleanCommand(novas)

  // novas check-circular
  defineCheckCircularCommand(novas)

  // novas check-dep
  defineDepcheckCommand(novas)

  // Invalid command
  novas.on('command:*', () => {
    consola.error(colors.red('Invalid command!'))
    process.exit(1)
  })

  novas.usage('novas')
  novas.help()
  novas.parse()
} catch (error) {
  consola.error(error)
  process.exit(1)
}
