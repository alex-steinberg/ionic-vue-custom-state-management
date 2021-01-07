import { starshispStore } from "@/store/starships/starships-store";

describe('get starships', () => {
    it('must set and get new starship data', () => {
        const items = [
            {
                "name": "CR90 corvette",
                "length": "150",
                "films": [
                    "http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/3/",
                    "http://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-10T14:20:33.369000Z",
            },
            {
                "name": "Star Destroyer",
                "length": "1,600",
                "max_atmosphering_speed": "975",
                "films": [
                    "http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/2/",
                    "http://swapi.dev/api/films/3/"
                ],
                "created": "2014-12-10T15:08:19.848000Z",
            }
        ];
        starshispStore.setStarships(items);
        expect(starshispStore.getState().items).toEqual(items);
    })
})
