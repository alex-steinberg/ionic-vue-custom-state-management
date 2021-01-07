import { Starships } from '@/models/swapi.model';
import { Store } from "@/store";

class StarshipsStore extends Store<Starships> {
    protected data(): Starships {
        return {
            items: []
        }
    }

    setStarships(items) {
        this.state.items = items;
    }
}
export const starshispStore: StarshipsStore = new StarshipsStore();
