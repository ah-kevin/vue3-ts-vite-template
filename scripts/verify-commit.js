import pico from 'picocolors' // 导入用于终端颜色输出的库
import { readFileSync } from 'node:fs' // 从 Node.js 的 fs 模块中导入 readFileSync 方法
import path from 'node:path' // 从 Node.js 的 path 模块中导入 path 对象
import process from 'node:process'
// 获取提交消息文件的路径
const msgPath = path.resolve('.git/COMMIT_EDITMSG')
// 读取提交消息文件的内容，并去除两端的空白字符
const msg = readFileSync(msgPath, 'utf-8').trim()

// 定义提交消息格式的正则表达式
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

// 测试提交消息是否符合格式
if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(`invalid commit message format.`)}\n\n` +
      pico.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${pico.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${pico.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
      pico.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1) // 退出进程并返回状态码 1，表示错误
}
