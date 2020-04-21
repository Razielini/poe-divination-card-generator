<template>
  <div
    class="tw-flex tw-justify-center tw-p-8 tw-flex-col md:tw-flex-row"
  >
    <div
      class="md:tw-w-1/2 md:tw-m-12"
    >
      <div
        class="title-bench"
      >
        - Divination Bench -
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
      <div
        class="title-bench"
      >
        - Images -
      </div>
      <div
        class="item-bench"
      >
        Images
      </div>
    </div>
    <div
      class="tw-w-1/2 tw-bg-green-900 tw-m-12"
    >
      Hello World
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
