export default {
  name: 'PageIndex',
  methods: {
    scroll (tipo) {
      switch (tipo) {
        case 'pet':
          this.$refs.pet.scrollIntoView({ behavior: 'smooth', block: 'end' })
          break
        case 'vet':
          this.$refs.vet.scrollIntoView({ behavior: 'smooth', block: 'start' })
          break
      }
    },
    irParaRota (tipo) {
      this.$emit('fechar-navbar-home')
      this.$router.push({ name: tipo })
    }
  }

}
