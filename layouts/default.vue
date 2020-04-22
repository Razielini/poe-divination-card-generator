<template>
  <div
    class="tw-flex tw-w-full tw-bg-mainbg tw-flex-col md:tw-h-screen tw-justify-between tw-relative"
  >
    <nuxt />
    <footer
      class="tw-flex tw-text-center tw-justify-center tw-px-4 tw-text-gray-100 tw-bg-green-800 md:tw-absolute tw-bottom-0 tw-w-full"
    >
      <div
        class="tw-container tw-py-6"
      >
        <div
          class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-mt-6 md:tw-flex-row"
        >
          <div>
            <a
              href="#"
              class="tw-text-xl tw-font-bold"
            >
              About
            </a>
          </div>
          <div
            class="tw-flex tw-mt-4 md:tw-m-0"
          >
            <div
              class="tw-mx-4"
            >
              Info - PoE is Poe
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
