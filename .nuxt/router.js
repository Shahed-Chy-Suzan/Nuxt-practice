import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48a12545 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _61f2a8ce = () => interopDefault(import('..\\pages\\blogs\\index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _3f762614 = () => interopDefault(import('..\\pages\\Debbie OBrien\\index.vue' /* webpackChunkName: "pages/Debbie OBrien/index" */))
const _36451e12 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2fc78943 = () => interopDefault(import('..\\pages\\middlewareApplied.vue' /* webpackChunkName: "pages/middlewareApplied" */))
const _6f0d82db = () => interopDefault(import('..\\pages\\others.vue' /* webpackChunkName: "pages/others" */))
const _4a874100 = () => interopDefault(import('..\\pages\\weather-app.vue' /* webpackChunkName: "pages/weather-app" */))
const _45c20870 = () => interopDefault(import('..\\pages\\blogs\\_blog.vue' /* webpackChunkName: "pages/blogs/_blog" */))
const _6859000a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _48a12545,
    name: "about"
  }, {
    path: "/blogs",
    component: _61f2a8ce,
    name: "blogs"
  }, {
    path: "/Debbie%20OBrien",
    component: _3f762614,
    name: "Debbie OBrien"
  }, {
    path: "/inspire",
    component: _36451e12,
    name: "inspire"
  }, {
    path: "/middlewareApplied",
    component: _2fc78943,
    name: "middlewareApplied"
  }, {
    path: "/others",
    component: _6f0d82db,
    name: "others"
  }, {
    path: "/weather-app",
    component: _4a874100,
    name: "weather-app"
  }, {
    path: "/blogs/:blog",
    component: _45c20870,
    name: "blogs-blog"
  }, {
    path: "/",
    component: _6859000a,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
