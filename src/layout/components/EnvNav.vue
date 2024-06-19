<script setup lang="ts">
import SvgIcon from '@/components/svgIcon/SvgIcon.vue'

const headerEnvClassName: { [k: string]: string } = {
  development: 'bg-[#FEC84B] border-[#FDB022] text-[#93370D]',
  test: 'bg-[#A5F0FC] border-[#67E3F9] text-[#164C63]'
}
const { VITE_USER_NODE_ENV } = import.meta.env
</script>

<template>
  <div :class="`flex items-center h-[22px] mr-4 rounded-md px-2 text-xs
   font-medium border ${headerEnvClassName[VITE_USER_NODE_ENV]}`">
    <template v-if="VITE_USER_NODE_ENV==='development'">
      <svg-icon name="terminalSquare" class="w-3 h-3 mr-1" />
      开发环境
    </template>
    <template v-if="VITE_USER_NODE_ENV==='test'">
      <svg-icon name="beaker" class="w-3 h-3 mr-1" />
      测试环境
    </template>
  </div>
</template>

<style scoped>

</style>
