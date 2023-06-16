import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
// 
import '@/assets/scss/layout/_header.scss'
import { RouterLink } from 'vue-router';
// 
const HeaderView = defineComponent({
    name: 'HeaderView',
    setup() {
        const scrollPosition = ref(0);

        const handleScroll = () => {
            scrollPosition.value = window.scrollY;
        };
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            scrollPosition,
        };
    },
    render() {
        return (
            <>
                <header class={[['header'], { 'shadow': this.scrollPosition > 0 }]}>
                    <div class="container">
                        <div class='header__content'>
                            <div class='header__location'>
                                <h1 class="header__logo">
                                    <RouterLink to='/' class='header__link'>
                                        FoodHub
                                    </RouterLink>
                                </h1>
                                <div class='header__from'>
                                    <button type="button" class="header__btn btn btn-lg text-secondary">
                                        <i class="bi bi-geo-alt-fill location__icons"></i>New York
                                    </button>
                                    <span class="material-symbols-outlined location2__icons text-secondary">
                                        my_location
                                    </span>
                                    <input type="text" name="search" id="search" placeholder='Search for restaurant' class='header__search' />
                                    <button type="button" class="header__btn btn btn-lg">
                                        <i class="bi bi-search search__icons"></i>
                                    </button>
                                </div>
                            </div>
                            <div class='header__navigation'>
                                <a href="#" class='header__navigation__user'>
                                    <span class="material-symbols-outlined">account_circle</span>
                                    <span>ACCOUNT</span>
                                </a>
                                <a href="#" class='header__navigation__shoppingCart'>
                                    <span class="material-symbols-outlined">shopping_cart</span>
                                    <span>(8)</span>
                                </a>
                                <a href="#" class='header__navigation__menu' data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
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
                                                                <a href='#' class="accordion-link text-dark">Food Menu</a>
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
                        </div>
                    </div>
                </header>
            </>
        )
    }
})

export default HeaderView
