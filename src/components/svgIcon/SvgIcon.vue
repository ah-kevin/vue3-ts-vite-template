<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

interface SvgIconProps {
  name: string; // 图标的名称 ==> 必传
  prefix?: string; // 图标的前缀 ==> 非必传（默认为"icon"）
  iconStyle?: CSSProperties; // 图标的样式 ==> 非必传
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  iconStyle: () => ({ with: '100px', height: '100px' })
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg>
    <use :xlink:href="symbolId"></use>
  </svg>
</template>
