<template>
  <div
    class="tw-flex tw-justify-center tw-pt-8 md:tw-px-8 md:tw-pt-16 tw-flex-col md:tw-flex-row"
  >
    <div
      class="md:tw-w-1/2 md:tw-mx-8 md:tw-mb-8 md:tw-mt-0 tw-px-4 md:tw-p-0 tw-max-w-xl"
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
          class="item-bench tw-flex-col md:tw-flex-row tw-p-4"
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
            v-model="divination.title"
            class="tw-w-full md:tw-w-64"
            type="text"
            value="Alone in the Darkness"
          >
        </div>
        <div
          class="item-bench tw-flex-col md:tw-flex-row tw-p-4"
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
            v-model="divination.reward"
            class="tw-w-full md:tw-w-64"
            type="text"
            value="Alone in the Darkness"
          >
        </div>
        <div
          class="item-bench tw-flex-col md:tw-flex-row tw-p-4"
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
            v-model="divination.stack"
            class="tw-w-full md:tw-w-64"
            type="number"
            value="6"
          >
        </div>
        <div
          class="item-bench tw-flex-col tw-p-4"
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
            class="pagination-bench hover:tw-text-hoverpagination"
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
            class="pagination-bench hover:tw-text-hoverpagination"
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
            :class="`tw-cursor-pointer tw-w-1/2 md:tw-w-1/3 tw-p-1 ${activeImage(item.src)}`"
            :src="'/img/' + item.src"
            @click="imageSelected(item)"
          >
        </div>
      </div>
      <div
        class="item-bench tw-justify-between flex-column tw-flex tw-p-0"
      >
        <button
          type="button"
          class="tw-p-5 tw-text-center tw-w-full"
          :disabled="createCard"
          @click="saveIMG()"
        >
          {{ createCard ? 'Creating Card....' : 'Download Card' }}
        </button>
      </div>
    </div>
    <div
      id="wrapper-divination-card"
      :style="`background-image: url(/img/${divination.img});`"
      class="tw-bg-no-repeat tw-mt-8 md:tw-mt-0 tw-mx-0"
    >
      <div
        class="tw-flex tw-flex-col align-center frame-divination-card"
      >
        <div
          class="tw-mx-16 tw-mt-4 tw-mb-15 tw-text-center tw-text-xl"
        >
          {{ divination.title }}
        </div>
        <div
          class="tw-text-white tw-mx-14 md:tw-mx-26 tw-mt-40 tw-text-xl"
        >
          {{ divination.stack }}
        </div>
        <div
          class="tw-text-center tw-text-2xl tw-mx-8 md:tw-mx-22 tw-mt-10 tw-text-secondary"
        >
          {{ divination.reward }}
        </div>
        <div
          class="tw-text-center tw-mx-8 md:tw-mx-22 tw-text-base tw-mt-8 tw-text-secondary"
        >
          {{ divination.lore }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const htmlToImage = require('html-to-image')
const download = require('downloadjs')

@Component
export default class ViewPoeDivination extends Vue {
  name: string = 'ViewPoeDivination'
  divinationImages: any[] = this.$store.state.divinationImages.images

  createCard: boolean = false
  selectSection: boolean = true

  pagination: any = {
    page: 1,
    itemsPerPage: 9
  }

  divination: any = {
    title: 'Alone in the Darkness',
    stack: '69',
    reward: 'Delve Item',
    lore: 'Sometimes, the most beautiful treasures...are the ones you cannot have. - Beryl, Survivor from the Azurite Mines',
    img: 'Alone_in_the_Darkness_card_art.png'
  }

  get divinationPaginated () {
    console.log('BrowserWidth :: ', this.BrowserWidth())
    const bw: string = this.BrowserWidth()
    if (bw === 'xs') {
      this.pagination.itemsPerPage = 8
    } else {
      this.pagination.itemsPerPage = 9
    }

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

  saveIMG () {
    console.log('saveIMG')
    this.createCard = true
    htmlToImage.toPng(document.getElementById('wrapper-divination-card'))
      .then((dataUrl: any) => {
        let img = new Image()
        img.src = dataUrl
        // this.printTitle('Hello')
        download(dataUrl, this.toSlug(this.divination.title) + '.png')
        console.log('saveIMG img ::', img)
      })
      .catch((error: any) => {
        console.error('oops, something went wrong!', error)
      })
      .finally(() => {
        this.createCard = false
      })
  }

  toSlug (str: string) {
    console.log('toSlug :: ', str)
    str = String(str).toString()
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()
    // remove accents, swap ñ for n, etc
    const swaps: any = {
      '0': ['°', '₀', '۰', '０'],
      '1': ['¹', '₁', '۱', '１'],
      '2': ['²', '₂', '۲', '２'],
      '3': ['³', '₃', '۳', '３'],
      '4': ['⁴', '₄', '۴', '٤', '４'],
      '5': ['⁵', '₅', '۵', '٥', '５'],
      '6': ['⁶', '₆', '۶', '٦', '６'],
      '7': ['⁷', '₇', '۷', '７'],
      '8': ['⁸', '₈', '۸', '８'],
      '9': ['⁹', '₉', '۹', '９'],
      'a': ['à', 'á', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'ā', 'ą', 'å', 'α', 'ά', 'ἀ', 'ἁ', 'ἂ', 'ἃ', 'ἄ', 'ἅ', 'ἆ', 'ἇ', 'ᾀ', 'ᾁ', 'ᾂ', 'ᾃ', 'ᾄ', 'ᾅ', 'ᾆ', 'ᾇ', 'ὰ', 'ά', 'ᾰ', 'ᾱ', 'ᾲ', 'ᾳ', 'ᾴ', 'ᾶ', 'ᾷ', 'а', 'أ', 'အ', 'ာ', 'ါ', 'ǻ', 'ǎ', 'ª', 'ა', 'अ', 'ا', 'ａ', 'ä'],
      'b': ['б', 'β', 'ب', 'ဗ', 'ბ', 'ｂ'],
      'c': ['ç', 'ć', 'č', 'ĉ', 'ċ', 'ｃ'],
      'd': ['ď', 'ð', 'đ', 'ƌ', 'ȡ', 'ɖ', 'ɗ', 'ᵭ', 'ᶁ', 'ᶑ', 'д', 'δ', 'د', 'ض', 'ဍ', 'ဒ', 'დ', 'ｄ'],
      'e': ['é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'ë', 'ē', 'ę', 'ě', 'ĕ', 'ė', 'ε', 'έ', 'ἐ', 'ἑ', 'ἒ', 'ἓ', 'ἔ', 'ἕ', 'ὲ', 'έ', 'е', 'ё', 'э', 'є', 'ə', 'ဧ', 'ေ', 'ဲ', 'ე', 'ए', 'إ', 'ئ', 'ｅ'],
      'f': ['ф', 'φ', 'ف', 'ƒ', 'ფ', 'ｆ'],
      'g': ['ĝ', 'ğ', 'ġ', 'ģ', 'г', 'ґ', 'γ', 'ဂ', 'გ', 'گ', 'ｇ'],
      'h': ['ĥ', 'ħ', 'η', 'ή', 'ح', 'ه', 'ဟ', 'ှ', 'ჰ', 'ｈ'],
      'i': ['í', 'ì', 'ỉ', 'ĩ', 'ị', 'î', 'ï', 'ī', 'ĭ', 'į', 'ı', 'ι', 'ί', 'ϊ', 'ΐ', 'ἰ', 'ἱ', 'ἲ', 'ἳ', 'ἴ', 'ἵ', 'ἶ', 'ἷ', 'ὶ', 'ί', 'ῐ', 'ῑ', 'ῒ', 'ΐ', 'ῖ', 'ῗ', 'і', 'ї', 'и', 'ဣ', 'ိ', 'ီ', 'ည်', 'ǐ', 'ი', 'इ', 'ی', 'ｉ'],
      'j': ['ĵ', 'ј', 'Ј', 'ჯ', 'ج', 'ｊ'],
      'k': ['ķ', 'ĸ', 'к', 'κ', 'Ķ', 'ق', 'ك', 'က', 'კ', 'ქ', 'ک', 'ｋ'],
      'l': ['ł', 'ľ', 'ĺ', 'ļ', 'ŀ', 'л', 'λ', 'ل', 'လ', 'ლ', 'ｌ'],
      'm': ['м', 'μ', 'م', 'မ', 'მ', 'ｍ'],
      'n': ['ñ', 'ń', 'ň', 'ņ', 'ŉ', 'ŋ', 'ν', 'н', 'ن', 'န', 'ნ', 'ｎ'],
      'o': ['ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ', 'ở', 'ỡ', 'ợ', 'ø', 'ō', 'ő', 'ŏ', 'ο', 'ὀ', 'ὁ', 'ὂ', 'ὃ', 'ὄ', 'ὅ', 'ὸ', 'ό', 'о', 'و', 'θ', 'ို', 'ǒ', 'ǿ', 'º', 'ო', 'ओ', 'ｏ', 'ö'],
      'p': ['п', 'π', 'ပ', 'პ', 'پ', 'ｐ'],
      'q': ['ყ', 'ｑ'],
      'r': ['ŕ', 'ř', 'ŗ', 'р', 'ρ', 'ر', 'რ', 'ｒ'],
      's': ['ś', 'š', 'ş', 'с', 'σ', 'ș', 'ς', 'س', 'ص', 'စ', 'ſ', 'ს', 'ｓ'],
      't': ['ť', 'ţ', 'т', 'τ', 'ț', 'ت', 'ط', 'ဋ', 'တ', 'ŧ', 'თ', 'ტ', 'ｔ'],
      'u': ['ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'û', 'ū', 'ů', 'ű', 'ŭ', 'ų', 'µ', 'у', 'ဉ', 'ု', 'ူ', 'ǔ', 'ǖ', 'ǘ', 'ǚ', 'ǜ', 'უ', 'उ', 'ｕ', 'ў', 'ü'],
      'v': ['в', 'ვ', 'ϐ', 'ｖ'],
      'w': ['ŵ', 'ω', 'ώ', 'ဝ', 'ွ', 'ｗ'],
      'x': ['χ', 'ξ', 'ｘ'],
      'y': ['ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ', 'ÿ', 'ŷ', 'й', 'ы', 'υ', 'ϋ', 'ύ', 'ΰ', 'ي', 'ယ', 'ｙ'],
      'z': ['ź', 'ž', 'ż', 'з', 'ζ', 'ز', 'ဇ', 'ზ', 'ｚ'],
      'aa': ['ع', 'आ', 'آ'],
      'ae': ['æ', 'ǽ'],
      'ai': ['ऐ'],
      'ch': ['ч', 'ჩ', 'ჭ', 'چ'],
      'dj': ['ђ', 'đ'],
      'dz': ['џ', 'ძ'],
      'ei': ['ऍ'],
      'gh': ['غ', 'ღ'],
      'ii': ['ई'],
      'ij': ['ĳ'],
      'kh': ['х', 'خ', 'ხ'],
      'lj': ['љ'],
      'nj': ['њ'],
      'oe': ['ö', 'œ', 'ؤ'],
      'oi': ['ऑ'],
      'oii': ['ऒ'],
      'ps': ['ψ'],
      'sh': ['ш', 'შ', 'ش'],
      'shch': ['щ'],
      'ss': ['ß'],
      'sx': ['ŝ'],
      'th': ['þ', 'ϑ', 'ث', 'ذ', 'ظ'],
      'ts': ['ц', 'ც', 'წ'],
      'ue': ['ü'],
      'uu': ['ऊ'],
      'ya': ['я'],
      'yu': ['ю'],
      'zh': ['ж', 'ჟ', 'ژ'],
      '(c)': ['©'],
      'A': ['Á', 'À', 'Ả', 'Ã', 'Ạ', 'Ă', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ', 'Â', 'Ấ', 'Ầ', 'Ẩ', 'Ẫ', 'Ậ', 'Å', 'Ā', 'Ą', 'Α', 'Ά', 'Ἀ', 'Ἁ', 'Ἂ', 'Ἃ', 'Ἄ', 'Ἅ', 'Ἆ', 'Ἇ', 'ᾈ', 'ᾉ', 'ᾊ', 'ᾋ', 'ᾌ', 'ᾍ', 'ᾎ', 'ᾏ', 'Ᾰ', 'Ᾱ', 'Ὰ', 'Ά', 'ᾼ', 'А', 'Ǻ', 'Ǎ', 'Ａ', 'Ä'],
      'B': ['Б', 'Β', 'ब', 'Ｂ'],
      'C': ['Ç', 'Ć', 'Č', 'Ĉ', 'Ċ', 'Ｃ'],
      'D': ['Ď', 'Ð', 'Đ', 'Ɖ', 'Ɗ', 'Ƌ', 'ᴅ', 'ᴆ', 'Д', 'Δ', 'Ｄ'],
      'E': ['É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê', 'Ế', 'Ề', 'Ể', 'Ễ', 'Ệ', 'Ë', 'Ē', 'Ę', 'Ě', 'Ĕ', 'Ė', 'Ε', 'Έ', 'Ἐ', 'Ἑ', 'Ἒ', 'Ἓ', 'Ἔ', 'Ἕ', 'Έ', 'Ὲ', 'Е', 'Ё', 'Э', 'Є', 'Ə', 'Ｅ'],
      'F': ['Ф', 'Φ', 'Ｆ'],
      'G': ['Ğ', 'Ġ', 'Ģ', 'Г', 'Ґ', 'Γ', 'Ｇ'],
      'H': ['Η', 'Ή', 'Ħ', 'Ｈ'],
      'I': ['Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị', 'Î', 'Ï', 'Ī', 'Ĭ', 'Į', 'İ', 'Ι', 'Ί', 'Ϊ', 'Ἰ', 'Ἱ', 'Ἳ', 'Ἴ', 'Ἵ', 'Ἶ', 'Ἷ', 'Ῐ', 'Ῑ', 'Ὶ', 'Ί', 'И', 'І', 'Ї', 'Ǐ', 'ϒ', 'Ｉ'],
      'J': ['Ｊ'],
      'K': ['К', 'Κ', 'Ｋ'],
      'L': ['Ĺ', 'Ł', 'Л', 'Λ', 'Ļ', 'Ľ', 'Ŀ', 'ल', 'Ｌ'],
      'M': ['М', 'Μ', 'Ｍ'],
      'N': ['Ń', 'Ñ', 'Ň', 'Ņ', 'Ŋ', 'Н', 'Ν', 'Ｎ'],
      'O': ['Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ', 'Ô', 'Ố', 'Ồ', 'Ổ', 'Ỗ', 'Ộ', 'Ơ', 'Ớ', 'Ờ', 'Ở', 'Ỡ', 'Ợ', 'Ø', 'Ō', 'Ő', 'Ŏ', 'Ο', 'Ό', 'Ὀ', 'Ὁ', 'Ὂ', 'Ὃ', 'Ὄ', 'Ὅ', 'Ὸ', 'Ό', 'О', 'Θ', 'Ө', 'Ǒ', 'Ǿ', 'Ｏ', 'Ö'],
      'P': ['П', 'Π', 'Ｐ'],
      'Q': ['Ｑ'],
      'R': ['Ř', 'Ŕ', 'Р', 'Ρ', 'Ŗ', 'Ｒ'],
      'S': ['Ş', 'Ŝ', 'Ș', 'Š', 'Ś', 'С', 'Σ', 'Ｓ'],
      'T': ['Ť', 'Ţ', 'Ŧ', 'Ț', 'Т', 'Τ', 'Ｔ'],
      'U': ['Ú', 'Ù', 'Ủ', 'Ũ', 'Ụ', 'Ư', 'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự', 'Û', 'Ū', 'Ů', 'Ű', 'Ŭ', 'Ų', 'У', 'Ǔ', 'Ǖ', 'Ǘ', 'Ǚ', 'Ǜ', 'Ｕ', 'Ў', 'Ü'],
      'V': ['В', 'Ｖ'],
      'W': ['Ω', 'Ώ', 'Ŵ', 'Ｗ'],
      'X': ['Χ', 'Ξ', 'Ｘ'],
      'Y': ['Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ', 'Ÿ', 'Ῠ', 'Ῡ', 'Ὺ', 'Ύ', 'Ы', 'Й', 'Υ', 'Ϋ', 'Ŷ', 'Ｙ'],
      'Z': ['Ź', 'Ž', 'Ż', 'З', 'Ζ', 'Ｚ'],
      'AE': ['Æ', 'Ǽ'],
      'Ch': ['Ч'],
      'Dj': ['Ђ'],
      'Dz': ['Џ'],
      'Gx': ['Ĝ'],
      'Hx': ['Ĥ'],
      'Ij': ['Ĳ'],
      'Jx': ['Ĵ'],
      'Kh': ['Х'],
      'Lj': ['Љ'],
      'Nj': ['Њ'],
      'Oe': ['Œ'],
      'Ps': ['Ψ'],
      'Sh': ['Ш'],
      'Shch': ['Щ'],
      'Ss': ['ẞ'],
      'Th': ['Þ'],
      'Ts': ['Ц'],
      'Ya': ['Я'],
      'Yu': ['Ю'],
      'Zh': ['Ж']
    }

    Object.keys(swaps).forEach((swap: any) => {
      swaps[swap].forEach((s: any) => {
        str = str.replace(new RegExp(s, 'g'), swap)
      })
    })

    return str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes
      .replace(/^-+/, '') // trim - from start of text
      .replace(/-+$/, '')
  }

  BrowserWidth () {
    if (window.innerWidth < 768) {
      // Extra Small Device
      return 'xs'
    } else if (window.innerWidth < 991) {
      // Small Device
      return 'sm'
    } else if (window.innerWidth < 1199) {
      // Medium Device
      return 'md'
    } else {
      // Large Device
      return 'lg'
    }
  }

  activeImage (src: string) {
    let res: string = ''
    if (src === this.divination.img) {
      res = 'active'
    }
    return res
  }

  imageSelected (item: any) {
    this.divination.img = item.src
    item.selected = true
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
    filter: grayscale(100%);
    border: 1px dashed transparent;
  }

  .image-container img:hover {
    filter: grayscale(0%);
    /* width: 190px; */
  }

  .image-container img.active {
    filter: grayscale(0%);
    border: 1px dashed;
  }

  #wrapper-divination-card {
    background-size: 350px;
    background-position-x: center;
    background-position-y: 49px;
    max-width: 500px;
  }

  .frame-divination-card {
    background-image: url('/ui/divination_card_frame.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 380px;
    min-height: 668px;
  }
</style>
