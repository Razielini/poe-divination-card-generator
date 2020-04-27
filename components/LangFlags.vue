<template>
  <div
    class="tw-h-12 tw-w-full tw-bg-black tw-px-24 tw-py-3"
  >
    <div
      class="flag-bench hover:tw-text-secondary"
    >
      <p
        class="tw-px-2 tw-cursor-pointer"
      >
        Languages
      </p>
      <p
        class="tw-flex tw-self-center tw-cursor-pointer"
      >
        <img
          class="tw-p-1"
          src="flags/ES.png"
          @click="$i18n.locale = 'es'"
        >
        <img
          class="tw-p-1 active"
          src="flags/GB.png"
          @click="$i18n.locale = 'en'"
        >
      </p>
    </div>
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
  .flag-bench img {
    filter: grayscale(100%);
    border: 1px dashed transparent;
  }

  .flag-bench img.active {
    filter: grayscale(0%);
    border-color: #FFF;
  }

  .flag-bench img:hover {
    filter: grayscale(0%);
  }
</style>
