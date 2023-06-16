import { defineComponent, onMounted } from 'vue'
import '@/assets/scss/pages/_home.scss'
import { RouterLink } from 'vue-router'
import { useCounterStore } from '../stores/axios';

//圖片 import
import resturant1 from '@/assets/images/resturant1.jpeg'
import resturant2 from '@/assets/images/resturant2.jpeg'
import resturant3 from '@/assets/images/resturant3.jpeg'
import resturant4 from '@/assets/images/resturant4.jpeg'

import collections1 from '@/assets/images/home.png'
import collections2 from '@/assets/images/home1.png'
import collections3 from '@/assets/images/home2.png'
import collections4 from '@/assets/images/home3.png'

import cuisine1 from '@/assets/images/asset4.png'
import cuisine2 from '@/assets/images/asset5.png'
import cuisine3 from '@/assets/images/asset6.png'
import cuisine4 from '@/assets/images/asset7.png'
import cuisine5 from '@/assets/images/asset8.png'
import cuisine6 from '@/assets/images/asset9.png'

import app1 from '@/assets/images/app-store.png'
import app2 from '@/assets/images/google-play.png'
import app3 from '@/assets/images/asset21.png'

export default defineComponent({
    name: 'HomeView',
    setup() {
        const counterStore: any = useCounterStore();

        onMounted(() => {
            counterStore.fetchData();
        });
        return () => (
            <main>
                <div class='banner'>
                    <div class="container">
                        <div class='content'>
                            <nav class='banner__nav'>
                                <h1 class="logo">
                                    <a href="#" class='banner__link text-white'>
                                        FoodHub
                                    </a>
                                </h1>
                                <div class='banner__navigation'>
                                    <a href="#" class='banner__navigation__user'>
                                        <span class="material-symbols-outlined">account_circle</span>
                                        <span>ACCOUNT</span>
                                    </a>
                                    <a href="#" class='banner__navigation__shoppingCart'>
                                        <span class="material-symbols-outlined">shopping_cart</span>
                                        <span>(8)</span>
                                    </a>
                                    <a href='#' class='banner__navigation__menu' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                        <span class="material-symbols-outlined">menu</span>
                                    </a>
                                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title fw-bold" id="staticBackdropLabel">Navbar</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body sideNavbar__body">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <span class="material-symbols-outlined me-3">
                                                                width_normal
                                                            </span> Dashboards
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul class="accordion-list">
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Review</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Photos</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Order List</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Order History</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Followers</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="javascript:;" class="accordion-link text-dark">Bookmarks</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <span class="material-symbols-outlined me-3">
                                                                restaurant
                                                            </span> Resturant
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <ul class="accordion-list">
                                                                <li class="accordion-item">
                                                                    <a href="#" class="accordion-link text-dark">Food Menu</a>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <RouterLink to='/ResturantTwoColumn' class="accordion-link text-dark">Resturant Two Column</RouterLink>
                                                                </li>
                                                                <li class="accordion-item">
                                                                    <a href="#" class="accordion-link text-dark">Search Resturant</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div class='banner__kv'>
                                <h2 class='banner__slogan text-white text-center'>Discover the best food & drinks in <span class="fw-bold align-top">New York</span></h2>
                                <p class='banner__text text-white text-center'>The meals you love, delivered with care</p>
                                <div class="row justify-content-center flex-wrap">
                                    <div class="col-10 col-md-8 col-lg-6">
                                        <div class="input-group mb-3 bg-white rounded-2">
                                            <button class="btn btn-light text-secondary" type="button"><i class="bi bi-geo-alt-fill me-2 align-top"></i>New York</button>
                                            <button class="btn btn-light" type="button"><span class="material-symbols-outlined location_iconTwo me-2 align-middle">
                                                my_location
                                            </span>Locate me</button>
                                            <input type="text" class="form-control" placeholder="Search for restaurant" aria-label="Example text with two button addons" />
                                            <button class="btn btn-primary" type="button">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class='resturant'>
                    <div class="container">
                        <ul class='resturant__list'>
                            <li class='resturant__info'>
                                <a href="#" class='resturant__link text-dark'>
                                    <div class='image'>
                                        <img src={resturant1} alt="resturantImage" />
                                    </div>
                                    <div class='resturant__content'>
                                        <h3 class='content__title'>Order Food Online</h3>
                                    </div>
                                </a>
                            </li>
                            <li class='resturant__info'>
                                <a href="#" class='resturant__link text-dark'>
                                    <div class='image'>
                                        <img src={resturant2} alt="resturantImage" />
                                    </div>
                                    <div class='resturant__content'>
                                        <h3 class='content__title'>Go Out For Meal</h3>
                                    </div>
                                </a>
                            </li>
                            <li class='resturant__info'>
                                <a href="#" class='resturant__link text-dark'>
                                    <div class='image'>
                                        <img src={resturant3} alt="resturantImage" />
                                    </div>
                                    <div class='resturant__content'>
                                        <h3 class='content__title'>Nightlife & Clubs</h3>
                                    </div>
                                </a>
                            </li>
                            <li class='resturant__info'>
                                <a href="#" class='resturant__link text-dark'>
                                    <div class='image'>
                                        <img src={resturant4} alt="resturantImage" />
                                    </div>
                                    <div class='resturant__content'>
                                        <h3 class='content__title'>Pro Membership</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class='collections'>
                    <div class="container">
                        <div class='collections__header'>
                            <div class="">
                                <h2 class='collections__title'>Collections</h2>
                                <p class='collections__text'>Explore curated lists of top restaurants, cafes, pubs, and bars in New York, based on trends</p>
                            </div>
                            <a href="javascript:;" class='end'>View all collections</a>
                        </div>
                        <ul class='collections__list'>
                            <li class='collections__item'>
                                <RouterLink to='/ResturantTwoColumn' class='collections__link'>
                                    <img src={collections1} alt="collections" class='collections__image' />
                                    <div class='collections__content'>
                                        <p>Most Searched of 2020</p>
                                        <p>30 Places<span class="material-symbols-outlined">
                                            chevron_right
                                        </span></p>
                                    </div>
                                </RouterLink>
                            </li>
                            <li class='collections__item'>
                                <RouterLink to='/ResturantTwoColumn' class='collections__link'>
                                    <img src={collections2} alt="collections" class='collections__image' />
                                    <div class='collections__content'>
                                        <p>Most Searched of 2020</p>
                                        <p>30 Places<span class="material-symbols-outlined">
                                            chevron_right
                                        </span></p>
                                    </div>
                                </RouterLink>
                            </li>
                            <li class='collections__item'>
                                <RouterLink to='/ResturantTwoColumn' class='collections__link'>
                                    <img src={collections3} alt="collections" class='collections__image' />
                                    <div class='collections__content'>
                                        <p>Most Searched of 2020</p>
                                        <p>30 Places<span class="material-symbols-outlined">
                                            chevron_right
                                        </span></p>
                                    </div>
                                </RouterLink>
                            </li>
                            <li class='collections__item'>
                                <RouterLink to='/ResturantTwoColumn' class='collections__link'>
                                    <img src={collections4} alt="collections" class='collections__image' />
                                    <div class='collections__content'>
                                        <p>Most Searched of 2020</p>
                                        <p>30 Places<span class="material-symbols-outlined">
                                            chevron_right
                                        </span></p>
                                    </div>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class='cuisine'>
                    <div class="container">
                        <h2 class='cuisine__title'>Browse By Cuisine</h2>
                        <ul class='cuisine__list'>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine1} alt="cuisine" class='cuisine__image' />
                                    <p>Italian</p>
                                </a>
                            </li>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine2} alt="cuisine" class='cuisine__image' />
                                    <p>Chinesse</p>
                                </a>
                            </li>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine3} alt="cuisine" class='cuisine__image' />
                                    <p>Japanesse</p>
                                </a>
                            </li>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine4} alt="cuisine" class='cuisine__image' />
                                    <p>Indian</p>
                                </a>
                            </li>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine5} alt="cuisine" class='cuisine__image' />
                                    <p>Thai Food</p>
                                </a>
                            </li>
                            <li class='cuisine__item'>
                                <a href="#" class='cuisine__link'>
                                    <img src={cuisine6} alt="cuisine" class='cuisine__image' />
                                    <p>Mexican</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class='popularNear'>
                    <div class="container">
                        <h2 class='popularNear__title'>Popular Near You</h2>
                        <ul class='popularNear__list'>
                            {counterStore.data !== null ? (
                                counterStore.data.map((item: {
                                    description: any;
                                    price: any;
                                    star: any;
                                    imageUrl: string | undefined;
                                    id: string;
                                    time: string;
                                    name: string;
                                }, index: number) => (
                                    index < 8 && (
                                        <li class='popularNear__item' key={item.id}>
                                            <RouterLink to={`/foodMenu${item.id}`} class='popularNear__link'>
                                                <div class='image'>
                                                    <img src={item.imageUrl} alt="resturantImage" />
                                                </div>
                                                <div class='popularNear__content'>
                                                    <h3 class='content-title text-dark'>{item.name} <span class='star'>{item.star} /<small class="text-secondary">5</small></span></h3>
                                                    <p class='content-text text-secondary'> <span class='money text-primary align-top'>${item.price}</span> • {item.description} • {item.time}</p>
                                                </div>
                                            </RouterLink>
                                        </li>
                                    )
                                ))
                            ) : (
                                <div>請重新搜尋...</div>
                            )}

                            {/* <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant1.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li> */}
                            {/* <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant6.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant2.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant3.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant4.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant5.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant3.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li>
                            <li class='popularNear__item'>
                                <a href="#" class='popularNear__link'>
                                    <div class='image'>
                                        <img src="src/assets/images/resturant2.jpeg" alt="resturantImage" />
                                    </div>
                                    <div class='popularNear__content'>
                                        <h3 class='content-title text-dark'>Starbucks <span class='star'>4.5 /<small>5</small></span></h3>
                                        <p class='content-text'> <span class='money'>$20</span> • Cofee, set menu • 15 - 20 min</p>
                                    </div>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </section>
                <div class='app'>
                    <div class="container">
                        <div class='app__content'>
                            <div>
                                <img src={app3} alt="" />
                            </div>
                            <div class='app__info'>
                                <h2 class='app__title'>Get the Mobile App</h2>
                                <p class='app__text'>We will send you a link, open it on your phone to download the app</p>
                                <div class='app__select'>
                                    <input type="radio" id="email" name="state" value="email" />
                                    <label for="email">Email</label>
                                    <input type="radio" id="phone" name="state" value="phone" />
                                    <label for="phone">Phone</label>
                                </div>
                                <div class='app__search'>
                                    <input type="search" name="" id="" placeholder='Email' />
                                    <button type="button" class='search__btn'>SEARCH</button>
                                </div>
                                <p class='download'>Download App from</p>
                                <div class='app__download'>
                                    <img
                                        src={app2}
                                        alt="google"
                                        class='app__image'
                                    />
                                    <img
                                        src={app1}
                                        alt="app"
                                        class='app__image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
})
