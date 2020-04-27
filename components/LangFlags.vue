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
        {{ this.$t("languages") }}
      </p>
      <p
        class="tw-flex tw-self-center tw-cursor-pointer"
      >
        <img
          :class="`tw-p-1 ' + ${ $i18n.locale === 'es' ? 'active' : null }`"
          src="flags/ES.png"
          @click="updateLang('es')"
        >
        <img
          :class="`tw-p-1 ' + ${ $i18n.locale === 'en' ? 'active' : null }`"
          src="flags/GB.png"
          @click="updateLang('en')"
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

  updateLang (lang: string) {
    this.$i18n.locale = lang
  }
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
