<template>
  <div class=".col .col-md-*">
    <div class="container1">
      <div class="flex items-center q-pa-md">
        <p>{{numero}}</p>
        <q-btn @click="adicionar" label="adicionar"></q-btn>
        <q-btn @click="diminuir" label="diminuir"></q-btn>
      </div>
      <div>
        <p>{{idade}}</p>
      </div>
    </div>

    <div class="container2">
      <div class="flex items-center q-pa-md">
        <p>{{numero}}</p>
        <q-btn @click="adicionar" label="adicionar"></q-btn>
        <q-btn @click="diminuir" label="diminuir"></q-btn>
      </div>
      <div>
        <p>{{idade}}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>
  </div>

</template>

<script src="./testes.js">
</script>

<style>
.container1 {
  width: 300px;
  height: 300px;
  left: 0;
}

.container2 {
  width: 300px;
  height: 500px;
  left: 600px;
}

</style>
