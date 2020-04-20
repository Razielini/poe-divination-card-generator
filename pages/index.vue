<template>
  <div
    class="tw-flex tw-justify-center tw-p-12 tw-flex-col md:tw-flex-row"
  >
    <div
      class="tw-w-1/2 tw-m-12"
    >
      <div
        class="tw-items-center tw-text-center title-bench tw-border-third tw-border tw-text-primary tw-text-xl tw-h-12 tw-p-2 tw-cursor-pointer"
      >
        - Divination Bench -
      </div>
      <div
        class="item-bench tw-flex tw-justify-between tw-border-t-2 tw-border-bgitembench tw-text-primary tw-text-xl tw-p-4"
      >
        <img
          class="tw-object-contain"
          src="/ui/bullet-point.png"
        >
        <p>
          Title
        </p>
        <input
          class="tw-w-64 tw-bg-black tw-border-borderinput tw-border tw-py-1 tw-px-2"
          type="text"
          value="Alone in the Darkness"
        >
      </div>
      <div
        class="item-bench tw-flex tw-justify-between tw-border-t-2 tw-border-bgitembench tw-text-primary tw-text-xl tw-p-4"
      >
        <img
          class="tw-object-contain"
          src="/ui/bullet-point.png"
        >
        <p>
          Reward
        </p>
        <input
          class="tw-w-64 tw-bg-black tw-border-borderinput tw-border tw-py-1 tw-px-2"
          type="text"
          value="Alone in the Darkness"
        >
      </div>
      <div
        class="item-bench tw-flex tw-justify-between tw-border-t-2 tw-border-bgitembench tw-text-primary tw-text-xl tw-p-4"
      >
        <img
          class="tw-object-contain"
          src="/ui/bullet-point.png"
        >
        <p>
          Stack
        </p>
        <input
          class="tw-w-64 tw-bg-black tw-border-borderinput tw-border tw-py-1 tw-px-2"
          type="number"
          value="6"
        >
      </div>
      <div
        class="item-bench tw-flex tw-justify-between tw-border-t-2 tw-border-bgitembench tw-text-primary tw-text-xl tw-p-4 tw-flex-col"
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
          class="tw-w-full tw-bg-black tw-border-borderinput tw-border tw-py-1 tw-px-2"
          type="text"
          value="Alone in the Darkness"
        />
      </div>
      <div
        class="tw-text-center title-bench tw-border-third tw-border tw-text-primary tw-text-xl tw-h-12 tw-p-2 tw-cursor-pointer"
      >
        - Images -
      </div>
      <div>
        Textos
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

  .item-bench {
    color: #b8905f;
    border-top: 2px solid #131111;
    background-color: #211b14;
  }

  .item-bench:hover {
    background-color: #392810;
  }
</style>
