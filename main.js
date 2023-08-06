
import Cursor from './cursor'
import { preloader } from './preloader'
import LocomotiveScroll from 'locomotive-scroll'
import Menu from './Menu'

const menuEl = document.querySelector('.menu')

preloader('.menu__item').then(() => {
  const scroll = new LocomotiveScroll({ el: menuEl, smooth: true })
  const cursor = new Cursor(document.querySelector('.cursor'))
  new Menu(menuEl)
})