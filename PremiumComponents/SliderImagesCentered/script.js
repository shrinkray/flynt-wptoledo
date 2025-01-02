import { buildRefs, getJSON } from '@/assets/scripts/helpers.js'
import Swiper from 'swiper'
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function (el) {
  const refs = buildRefs(el)
  const multiRefs = buildRefs(el, true)
  const data = getJSON(el)

  const swiper = initSlider(refs, data)

  function initSlider (refs, data) {
    const { options } = data

    const config = {
      modules: [Autoplay, A11y, Navigation, Pagination],
      a11y: options.a11y,
      roundLengths: true,
      navigation: {
        nextEl: refs.next,
        prevEl: refs.prev
      },
      loop: true,
      loopAdditionalSlides: multiRefs.sliderItems.length > 3 ? 1 : 0,
      slidesPerView: 1,
      pagination: {
        el: refs.pagination,
        clickable: true
      },
      on: {
        afterInit: (swiper) => {
          swiper.loopFix()
        },
        slideChangeTransitionEnd: (swiper) => {
          swiper.loopFix()
        }
      }
    }

    if (options.autoplay && options.autoplaySpeed) {
      config.autoplay = {
        delay: options.autoplaySpeed
      }
    }

    return new Swiper(refs.slider, config)
  }

  return () => swiper.destroy()
}
