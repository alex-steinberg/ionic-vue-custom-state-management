<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic with custom state management example</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-button expand="full" @click="fetchStarships" data-testid="fetchBtn">Fetch starships</ion-button>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <ion-list v-if="getStarships.items.length > 0">
          <ion-item v-for="item in getStarships.items" :key="item.created" :item="item">
            Starship name: {{item.name}}
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Starship, SwapiResponse } from '@/models/swapi.model';
import { starshispStore } from '@/store/starships/starships-store';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem
  },
  setup() {
    const errorMessage = ref('');
    const setStarships = (items) => {
      starshispStore.setStarships(items);
    }
    return {
      getStarships: starshispStore.getState(),
      setStarships,
      errorMessage
    }
  },
  methods: {
    async fetchStarships(): Promise<any> {
      this.errorMessage = '';
      try {
        const res = await this.axios.get<SwapiResponse<Starship[]>>("https://swapi.dev/api/starships");
        if (res) {
          this.setStarships(res.data.results);
        }
      } catch(e) {
        console.log(e);
        this.errorMessage = 'No starships found';
      }
    }
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
