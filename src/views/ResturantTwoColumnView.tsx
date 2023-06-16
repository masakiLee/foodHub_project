import { defineComponent, onMounted, ref } from 'vue'
import '@/assets/scss/pages/_resturant.scss'
import BreadcrumbView from '@/components/BreadcrumbView'
import { useCounterStore } from '../stores/axios';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: 'ResturantTwoColumnView',
    setup() {
        const counterStore: any = useCounterStore();

        const categories = ref([] as never[]);
        const starlevel = ref([] as never[]);
        const sortBy = ref('');

        const clickBtn = () => {
            const state = {
                categories: categories.value,
                starlevel: starlevel.value,
                sortBy: sortBy.value
            }
            counterStore.updateData( state )
        }


        onMounted(() => {
            counterStore.fetchData();
        });
        return () => (
            <div class='resturant bg-white'>
                <BreadcrumbView />
                <div class="resturant__content">
                    <div class="container">
                        <nav class='resturant__nav'>
                            <div class='nav-tabs nav nav-tabs' id="nav-tab" role="tablist">
                                <button class='nav-link nav-link active' id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Delivery</button>
                                <button class='nav-link nav-link' id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Dining Out</button>
                                <button class='nav-link nav-link' id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Nightlife</button>
                            </div>
                            <button class='btn__filter btn btn-primary' onClick={() => clickBtn()}>FILTER</button>
                        </nav>
                        <button class='btn btn-primary btn-categories' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><span class="material-symbols-outlined">
                            menu
                        </span>Categories</button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class='resturant__categories'>
                                    <label for="category-checkbox" class='category__title'>Categories</label>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Thai" name="category" value="Thai" v-model={categories.value} />
                                        <label for="Thai">Thai</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Sushi" name="category" value="Sushi" v-model={categories.value} />
                                        <label for="Sushi">Sushi</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Dessert" name="category" value="Dessert" v-model={categories.value} />
                                        <label for="Dessert">Dessert</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Vegetarian" name="category" value="Vegetarian" v-model={categories.value} />
                                        <label for="Vegetarian">Vegetarian</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Burgers" name="category" value="Burgers" v-model={categories.value} />
                                        <label for="Burgers">Burgers</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Curry" name="category" value="Curry" v-model={categories.value} />
                                        <label for="Curry">Curry</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Pasta" name="category" value="Pasta" v-model={categories.value} />
                                        <label for="Pasta">Pasta</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="category-checkbox" class='category__title'>starlevel</label>
                                    <div class='category__content'>
                                        <input type="checkbox" id="4" name="starlevel" value="4" v-model={starlevel.value} />
                                        <label for="4">4+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="3" name="starlevel" value="3" v-model={starlevel.value} />
                                        <label for="3">3+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="2" name="starlevel" value="2" v-model={starlevel.value} />
                                        <label for="2">2+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="1" name="starlevel" value="1" v-model={starlevel.value} />
                                        <label for="1">1+</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="category-radio" class='category__title'>sortBy</label>
                                    <div class='category__content'>
                                        <input type="radio" id="high" name="money text-primary align-top" value="pricehigh" v-model={sortBy.value} />
                                        <label for="high">價錢高到低</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="low" name="money text-primary align-top" value="pricelow" v-model={sortBy.value} />
                                        <label for="low">價錢低到高</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="starhigh" name="money text-primary align-top" value="starhigh" v-model={sortBy.value} />
                                        <label for="starhigh">星級高到低</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="starlow" name="money text-primary align-top" value="starlow" v-model={sortBy.value} />
                                        <label for="starlow">星級低到高</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="range-input" class='category__title'>Cost per person</label>
                                    <input type="range" id="range-input" name="range" min="0" max="100" step="10" />
                                </div>
                            </div>
                        </div>
                        <div class='resturant__box'>
                            <div class='resturant__select'>
                                <div class='resturant__categories'>
                                    <label for="category-checkbox" class='category__title'>Categories</label>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Thai" name="category" value="Thai" v-model={categories.value} />
                                        <label for="Thai">Thai</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Sushi" name="category" value="Sushi" v-model={categories.value} />
                                        <label for="Sushi">Sushi</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Dessert" name="category" value="Dessert" v-model={categories.value} />
                                        <label for="Dessert">Dessert</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Vegetarian" name="category" value="Vegetarian" v-model={categories.value} />
                                        <label for="Vegetarian">Vegetarian</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Burgers" name="category" value="Burgers" v-model={categories.value} />
                                        <label for="Burgers">Burgers</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Curry" name="category" value="Curry" v-model={categories.value} />
                                        <label for="Curry">Curry</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="Pasta" name="category" value="Pasta" v-model={categories.value} />
                                        <label for="Pasta">Pasta</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="category-checkbox" class='category__title'>starlevel</label>
                                    <div class='category__content'>
                                        <input type="checkbox" id="4" name="starlevel" value="4" v-model={starlevel.value} />
                                        <label for="4">4+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="3" name="starlevel" value="3" v-model={starlevel.value} />
                                        <label for="3">3+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="2" name="starlevel" value="2" v-model={starlevel.value} />
                                        <label for="2">2+</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="checkbox" id="1" name="starlevel" value="1" v-model={starlevel.value} />
                                        <label for="1">1+</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="category-radio" class='category__title'>sortBy</label>
                                    <div class='category__content'>
                                        <input type="radio" id="high" name="money text-primary align-top" value="pricehigh" v-model={sortBy.value} />
                                        <label for="high">價錢高到低</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="low" name="money text-primary align-top" value="pricelow" v-model={sortBy.value} />
                                        <label for="low">價錢低到高</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="starhigh" name="money text-primary align-top" value="starhigh" v-model={sortBy.value} />
                                        <label for="starhigh">星級高到低</label>
                                    </div>
                                    <div class='category__content'>
                                        <input type="radio" id="starlow" name="money text-primary align-top" value="starlow" v-model={sortBy.value} />
                                        <label for="starlow">星級低到高</label>
                                    </div>
                                </div>
                                <div class='resturant__categories'>
                                    <label for="range-input" class='category__title'>Cost per person</label>
                                    <input type="range" id="range-input" name="range" min="0" max="100" step="10" />
                                </div>
                            </div>
                            <div class='resturant__template'>
                                <h2 class='resturant__template__title'>
                                    {counterStore.data !== null && counterStore.data !== undefined
                                        ? `${counterStore.data.length} Delivery Restaurants in New York`
                                        : 'Loading...'}
                                </h2>
                                <ul class='resturant__template__list'>
                                    {counterStore.data !== null ? (
                                        counterStore.data.map((item: {
                                            description: any;
                                            price: any;
                                            star: any;
                                            imageUrl: string | undefined;
                                            id: string;
                                            time: string; name: string;
                                        }) => (
                                            <li class='resturant__template__info'>
                                                <RouterLink to={`/foodMenu${item.id}`} class='resturant__template__link'>
                                                    <div class='image'>
                                                        <img src={item.imageUrl} alt="resturantImage" />
                                                    </div>
                                                    <div class='resturant__template__content'>
                                                        <h3 class='content-title text-dark'>{item.name} <span class='star'>{item.star} /<small class="text-secondary">5</small></span></h3>
                                                        <p class='content-text text-secondary'> <span class='money text-primary align-top'>${item.price}</span> • {item.description} • {item.time}</p>
                                                    </div>
                                                </RouterLink>
                                            </li>
                                        ))
                                    ) : (
                                        <div>請重新搜尋...</div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
