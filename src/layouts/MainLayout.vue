<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title><q-btn flat rounded @click="irHome" icon="home" label="Home" no-caps /></q-toolbar-title>
        <div>
        <q-toolbar-title><q-btn flat round @click="irHome" icon="fab fa-instagram" target="_blank" no-caps /></q-toolbar-title>
        </div>

      </q-toolbar>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Menu</q-item-label>
        <EssentialLink @fechar-navbar="leftDrawerOpen = false" v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @fechar-navbar-home="leftDrawerOpen = false" />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  methods: {
    irHome () {
      this.leftDrawerOpen = false
      this.$router.push('/')
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Para seu Pet',
          caption: 'Tudo para seu Pet',
          icon: 'pets',
          link: '/pet',
          pagina: 'petgo'
        },
        {
          title: 'Para Veterinários',
          caption: 'Receba chamadas',
          icon: 'how_to_reg',
          link: '/veterinario',
          pagina: 'petgojob'
        },
        {
          title: 'Política de Privacidade',
          caption: 'Veja nossa política',
          descricao: 'Veja nossa política',
          keywords: 'Veja nossa política',
          icon: 'ac_unit',
          link: '/privacidade',
          pagina: 'petgojob'
        }
      ]
    }
  },
  mounted () {
    console.warn(this.$router.currentRoute.name)
    if (this.$router.currentRoute.name === 'home') {
      this.leftDrawerOpen = false
    }
  },
  watch: {
    '$route' (agora, antes) {
      console.warn(agora, antes)
    }
  }
}
</script>

<style lang="scss">
.q-toolbar {
  background: $secondary;
}
</style>
