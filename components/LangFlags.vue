<template>
  <div>
    Flags
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class cLangFlags extends Vue {
  name: string = 'cLangFlags'
}
</script>

<style>
  .footer-bench {
    background: url(/ui/section-title-left.png) repeat-y left top,
    url(/ui/section-title-right.png) repeat-y right top #000;
  }

  .footer-bench::before {
    background-image: url(/ui/subtle-grunge.png);
    opacity: .1;
    z-index: -1;
  }
</style>
