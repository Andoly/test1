<template>
  <q-page>
    <section class="relative-position index" ref="index">
      <q-icon name="pets" class="patas" v-for="(index) in Array(70)" :key="index" />
      <div class="Home" style="width: 100%">
        <div class="container">
          <div class="row items-center q-col-gutter-md flex-center">
            <div class="col-xs-12 col-md-6 flex flex-center">
              <div class="column flex-center q-gutter-md">
                <q-img src="~assets/PETGO_LOGO2.png" />
                <div class="flex q-gutter-md botoes">
                  <q-btn
                    @click="irParaRota('pet')"
                    to="/pet"
                    icon="pets"
                    no-caps
                    rounded
                    color="white"
                    outline
                    unelevated
                    label="Para seu pet"
                  />
                  <q-btn
                    @click="irParaRota('veterinario')"
                    to="/veterinario"
                    icon="how_to_reg"
                    no-caps
                    rounded
                    color="secondary"
                    unelevated
                    label="Para veterinários"
                  />
                </div>
                <div class="col-12 row q-gutter-md">
                  <a
                    href="www.petgo.com.br"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="btn-play"
                  ></a>
                  <a
                    href="www.petgo.com.br"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="btn-apple"
                  ></a>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-6 flex-center flex">
                <img src="~assets/leao.png" width="300px" height="590px">
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script src="./Index.js">
</script>

<style lang="scss">
@for $i from 1 through 70 {
  .patas:nth-of-type(#{$i}) {
    top: random(1000) + px;
    left: random(2000) + px;
    color: rgba(#fff, 0.3);
  }
}

.index {
  position: relative;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(124,27,78);
  background: -moz-linear-gradient(180deg, rgba(124,27,78,1) 0%, rgba(91,30,62,1) 50%, rgba(73,24,50,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(124,27,78,1) 0%, rgba(91,30,62,1) 50%, rgba(73,24,50,1) 100%);
  background: linear-gradient(180deg, rgba(124,27,78,1) 0%, rgba(91,30,62,1) 50%, rgba(73,24,50,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7c1b4e",endColorstr="#491832",GradientType=1);
  padding: 20px;
  overflow: hidden;
  & .q-img {
    width: 180px;
    height: auto;
  }
  .patas {
    position: absolute;
  }
}

.pet {
  height: 100vh;
  & .row {
    height: 100%;
  }
  & .q-img {
    position: relative;
    max-width: 100%;
    object-fit: contain;
    width: 300px;
    height: 590px;
  }
}
.q-img src{
  height: 590;
  width: 300px;
}

.btn-apple {
  background: url("~assets/appstore1.svg");
  width: 140px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
}
.btn-play {
  background: url("~assets/appstore2.svg");
  width: 135px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
}

@media screen and (max-width: 390px) {
  .index {
    & .botoes {
      display: flex;
      justify-content: center;
    }
  }
}

@keyframes animarPatas {
  to {
    top: 100%;
  }
}

</style>
