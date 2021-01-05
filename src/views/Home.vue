<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic with Vuex example</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-button expand="full" @click="fetchStarships">Fetch starships</ion-button>
        <p v-if="errorMessage" v-bind="errorMessage"></p>
        <ion-list>
          <ion-item v-for="item in ships" :key="item.created" :item="item">
            Starship name: {{item.name}}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/vue';
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import { Starship, SwapiResponse } from '../models/swapi.model';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList,
    IonItem
  },
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    async fetchStarships() {
      const res = await this.axios.get<SwapiResponse<Starship[]>>("https://swapi.dev/api/starships/");
      if (res) {
        this.$store.dispatch('starships/setStarships', res.data.results);
      } else {
        this.errorMessage = 'No starships found';
      }
    }
  },
  computed: {
    ...mapGetters('starships', {
      ships: 'getStarships'
    })
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
