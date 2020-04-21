<template>
  <div
    class="tw-flex tw-justify-center tw-p-8 tw-flex-col md:tw-flex-row"
  >
    <div
      class="md:tw-w-1/2 md:tw-m-12"
    >
      <div
        class="title-bench"
        @click="selectSection = true"
      >
        - Divination Bench -
      </div>
      <div
        v-if="selectSection"
      >
        <div
          class="item-bench tw-flex-col md:tw-flex-row"
        >
          <div
            class="tw-flex tw-mb-4"
          >
            <img
              class="tw-object-contain tw-mr-4"
              src="/ui/bullet-point.png"
            >
            <p>
              Title
            </p>
          </div>
          <input
            class="tw-w-64"
            type="text"
            value="Alone in the Darkness"
          >
        </div>
        <div
          class="item-bench tw-flex-col md:tw-flex-row"
        >
          <div
            class="tw-flex tw-mb-4"
          >
            <img
              class="tw-object-contain tw-mr-4"
              src="/ui/bullet-point.png"
            >
            <p>
              Reward
            </p>
          </div>
          <input
            class="tw-w-64"
            type="text"
            value="Alone in the Darkness"
          >
        </div>
        <div
          class="item-bench tw-flex-col md:tw-flex-row"
        >
          <div
            class="tw-flex tw-mb-4"
          >
            <img
              class="tw-object-contain tw-mr-4"
              src="/ui/bullet-point.png"
            >
            <p>
              Stack
            </p>
          </div>
          <input
            class="tw-w-64"
            type="number"
            value="6"
          >
        </div>
        <div
          class="item-bench tw-flex-col"
        >
          <div
            class="tw-flex tw-mb-4"
          >
            <img
              class="tw-object-contain tw-mr-4"
              src="/ui/bullet-point.png"
            >
            <p>
              Lore
            </p>
          </div>
          <textarea
            class="tw-w-full"
            rows="5"
          >
            "Sometimes, the most beautiful treasures...are the ones you cannot have."- Beryl, Survivor from the Azurite Mines
          </textarea>
        </div>
      </div>
      <div
        class="title-bench"
        @click="selectSection = false"
      >
        - Images -
      </div>
      <div
        v-if="!selectSection"
        class="item-bench tw-flex-col"
      >
        <div
          class="tw-flex tw-justify-end"
        >
          <p
            class="tw-mx-2 tw-cursor-pointer hover:tw-text-hoverpagination"
            @click="lessPage()"
          >
            &#060; Prev
          </p>
          <p
            class="tw-mx-2 tw-cursor-pointer"
          >
            {{ pagination.page }} / {{ totalPages }}
          </p>
          <p
            class="tw-mx-2 tw-cursor-pointer hover:tw-text-hoverpagination"
            @click="addPage()"
          >
            Next &#62;
          </p>
        </div>
        <div
          class="image-container tw-flex tw-flex-wrap"
        >
          <img
            v-for="item in divinationPaginated"
            :key="item.src"
            class="tw-w-1/2 md:tw-w-1/3 tw-p-1"
            :src="'/img/' + item.src"
          >
        </div>
      </div>
    </div>
    <div
      class="tw-w-1/2 tw-bg-green-900 tw-m-12"
    >
      Hello World
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// const htmlToImage = require('html-to-image')
// const download = require('downloadjs')

@Component
export default class ViewPoeDivination extends Vue {
  name: string = 'ViewPoeDivination'
  divinationImages: any[] = this.$store.state.divinationImages.images

  selectSection: boolean = false

  pagination: any = {
    page: 1,
    itemsPerPage: 9
  }

  get divinationPaginated () {
    const images = [...this.divinationImages]
    const itemsPerPage: number = this.pagination.itemsPerPage
    const initial: number = ((this.pagination.page - 1) * itemsPerPage)
    console.log('images :: ', images)
    console.log('initial :: ', initial)
    const slice = images.slice(initial, initial + itemsPerPage)
    console.log('slice :: ', slice)
    return images.slice(initial, initial + itemsPerPage)
  }

  get totalPages () {
    return Math.ceil(Math.trunc(this.divinationImages.length / this.pagination.itemsPerPage))
  }

  addPage () {
    this.pagination.page++
    if (this.pagination.page > this.totalPages) {
      this.pagination.page = 1
    }
  }

  lessPage () {
    this.pagination.page--
    if (this.pagination.page <= 0) {
      this.pagination.page = this.totalPages
    }
  }

  mounted () {
    console.info('mounted ::', name)
  }
}
</script>

<style>
  .title-bench {
    background: url(/ui/section-title-left.png) no-repeat left top,
    url(/ui/section-title-right.png) no-repeat right top #000;
  }

  .item-bench:hover {
    background-color: #392810;
  }

  .item-bench::before {
    background-image: url(/ui/subtle-grunge.png);
    opacity: .1;
    z-index: -1;
  }

  .image-container img {
    /* width: 190px; */
  }
</style>
