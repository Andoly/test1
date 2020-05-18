export default {
  name: 'testes',
  data () {
    return {
      numero: 0
    }
  },
  methods: {
    adicionar () {
      this.numero = this.numero + 1
    },
    diminuir () {
      this.numero = this.numero - 1
    }
  },
  computed: {
    idade () {
      return `Fulano tem ${this.numero.toFixed(2)} anos`
    }
  },
  watch: {
    numero (agora, antes) {
      if (agora === 5 && antes < agora) {
        this.numero += 10
      }
    }
  },
  beforeCreate () {},
  created () {},
  beforeMounted () {},
  mounted () {},
  beforeDestroy () {}
}
