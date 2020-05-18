<template>
  <q-page>
    <div class="container">
       <section class="paraPet relative-position pet" ref="pet">
      <div class="row">
        <div class="col-xs-12 col-md-4 relative-position card">
          <q-img src="~assets/cachorro.jpg" />
        </div>
        <div class="col-xs-12 col-md-8 q-pa-md">
          <div class="text-h6 q-mt-xl">Para seu pet</div>
          <p>Tudo para seu pet em um só lugar. E melhor ainda, com a maior praticidade. Com o PetLove você pode comprar rações, petiscos, medicamentos e brinquedos para seu animalzinho e receber no conforto do seu lar. E, caso seu pet precise de atendimento profissional, você consegue alguém para buscá-lo em sua casa e levar ao veterinário.</p>
        </div>
      </div>
    </section>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Pet'
}
</script>

<style lang="scss">
.card{
  top: 10px;
}

.paraPet {
  height: 100vh;
  & .row {
    height: 100%;
  }
  & .q-img {
    position: absolute;
    max-width: 100%;
    object-fit: contain;
    border: 5px solid $primary;
    border-radius: 120px 0 120px 0;
    height: 100%;
  }
}

</style>
