<template>
  <q-page>
    <div class="container">
       <section class="paraPet relative-position" ref="vet">
      <div class="row">
          <div class="col-xs-12 col-md-8 q-pa-md">
          <div class="text-h6 q-mt-xl">Para seu pet</div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reprehenderit, illo aut perferendis repellat eaque totam numquam natus qui praesentium explicabo impedit dolorum adipisci veritatis aperiam, sint dolorem nobis dignissimos!</p>
        </div>
        <div class="col-xs-12 col-md-4 relative-position card">
          <q-img src="~assets/vet.png" />
        </div>

      </div>
    </section>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'Veterinario'
}
</script>

<style lang="scss">

.card{
  top: 10px;
}

.paraVet {
  height: 100vh;
  & .row {
    height: 100%;
  }
  & .q-img {
    position: absolute;
    max-width: 50%;
    object-fit: contain;
    border: 5px solid $secondary;
    border-radius:  0 120px 0 120px;
    height: 50%
  }
}

</style>
