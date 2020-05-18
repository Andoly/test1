
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'pet', path: '/pet', component: () => import('pages/Pet.vue') },
      { name: 'veterinario', path: '/veterinario', component: () => import('pages/Veterinario.vue') },
      { name: 'privacidade', path: '/privacidade', component: () => import('pages/Privacidade.vue') },
      { name: 'testes', path: '/testes', component: () => import('pages/test.vue') }
    ]
  }
  // {
  //   path: '/pet',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Pet.vue') }
  //   ]
  // },
  // {
  //   path: '/veterinario',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Veterinario.vue') }
  //   ]
  // },
  // {
  //   path: '/privacidade',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Privacidade.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
