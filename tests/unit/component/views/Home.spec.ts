import { render } from "@testing-library/vue";
import Home from "@/views/Home.vue";

test('Fetch starships button is present', async () => {
    const {getByTestId} = render(Home);
    getByTestId('fetchBtn');
});
