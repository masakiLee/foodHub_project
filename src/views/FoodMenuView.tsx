import { defineComponent, computed, onMounted, ref } from 'vue'
import '../assets/scss/pages/_foodMenu.scss'
import BreadcrumbView from '../components/BreadcrumbView'
// import classnames from 'classnames'
import { useCounterStore } from '../stores/axios'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'FoodMenuView',
    setup() {
        const counterStore: any = useCounterStore();
        const route = useRoute();
        const id = computed(() => route.params.id).value;
        const foodMenuData = ref<any>(null);
        const products = ref<any[]>([]);
        const currentCategory = ref('Recomended');
        const filteredProducts = computed(() => {
            return products.value.filter(product => product.category === currentCategory.value);
        });

        const changeCategory = (category: string) => {
            currentCategory.value = category;
        };

        const categories = ref([
            { name: 'Recomended' },
            { name: 'DPB Special Combos' },
        ]);

        const getCategoryCount = (categoryName: string) => {
            return products.value.filter(product => product.category === categoryName).length;
        };


        onMounted(async () => {
            await counterStore.fetchData();
            const matchedData = counterStore.data.find((item: any) => item.id === id);
            if (matchedData) {
                const { name, description, id, price, time, flat, star, imageUrl, imagesUrl, address, open, website } = matchedData
                foodMenuData.value = { name, description, id, price, time, flat, star, imageUrl, imagesUrl, address, open, website }
                products.value = matchedData.products

            } else {
                console.log('No matching data found');
            }
        });

        return () => (
            <div class="foodMenu">
                <BreadcrumbView />
                <div class="foodMenu__product">
                    <div class="container">
                        <div class='foodMenu__images'>
                            {foodMenuData.value && foodMenuData.value.imagesUrl && foodMenuData.value.imagesUrl.map((imageUrl: string | undefined, index: string | number) => (
                                <div class='foodMenu__pic' key={index}>
                                    <img src={imageUrl} alt={`foodMenuPic${index}`} />
                                </div>
                            ))}
                        </div>
                        <div class='foodMenu__info'>
                            <div class='foodMenu__header'>
                                {foodMenuData.value && (
                                    <>
                                        <h2 class='foodMenu__title'>{foodMenuData.value.name}</h2>
                                        <div class='foodMenu__cp'>
                                            <div class='foodMenu__star'>
                                                <i class="bi bi-star-fill star text-warning text-warning"></i>
                                                <i class="bi bi-star-fill star text-warning"></i>
                                                <i class="bi bi-star-fill star text-warning"></i>
                                                <i class="bi bi-star-fill star text-warning"></i>
                                                <i class="bi bi-star-fill star text-warning"></i>
                                            </div>
                                            <span class='score'>{foodMenuData.value.star}</span>
                                            <span class='comment text-secondaryTwo'>(1200)</span>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div class='foodMenu__content'>
                                {foodMenuData.value && (
                                    <>
                                        <p class='category'>{foodMenuData.value.category}</p>
                                        <p class='location text-secondaryTwo'><i class="bi bi-geo-alt-fill icon"></i>{foodMenuData.value.address}</p>
                                        <p class='time text-secondaryTwo'><i class="bi bi-clock icon"></i><span class="text-primary align-top">{foodMenuData.value.open}</span></p>
                                        <p class='link text-secondaryTwo'><i class="bi bi-globe-americas icon"></i>{foodMenuData.value.website}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <nav>
                            <div class='nav-tabs nav foodMenu_nav' id="nav-tab" role="tablist">
                                <button class='nav-link nav-link active' id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Order Online</button>
                                <button class='nav-link nav-link' id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Book a Table</button>
                                <button class='nav-link nav-link' id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
                            </div>
                        </nav>
                        <div class='tab-content tab-content' id="nav-tabContent">
                            <div class='tab-pane tab-pane fade show active' id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <button class='btn btn-primary btn-categories' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><span class="material-symbols-outlined">
                                    menu
                                </span>Categories</button>
                                <div class="offcanvas offcanvas-start offcanvas__food" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul class="offcanvas-list">
                                            {categories.value.map((category: { name: string }) => (
                                                <li
                                                    class={{ 'foodMenu__item': true, 'active': currentCategory.value === category.name, }}
                                                    onClick={() => changeCategory(category.name)}
                                                    key={category.name}
                                                >
                                                    {category.name} ({getCategoryCount(category.name)})
                                                </li>
                                            ))}
                                            <li class='foodMenu__item'>Chineese Starters (30)</li>
                                            <li class='foodMenu__item'>Chinese Main Course (75)</li>
                                            <li class='foodMenu__item'>Indian Main Course (63)</li>
                                            <li class='foodMenu__item'>Rice & Pulao (7)</li>
                                            <li class='foodMenu__item'>Desserts (1)</li>
                                            <li class='foodMenu__item'>Soup & wonton (15)</li>
                                            <li class='foodMenu__item'>Accompaniment (4)</li>
                                            <li class='foodMenu__item'>Biryani (1)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class='foodMenu__box'>
                                    <ul class='foodMenu__list'>
                                        {categories.value.map((category: { name: string }) => (
                                            <li
                                                class={{ 'foodMenu__item': true, 'active': currentCategory.value === category.name }}
                                                onClick={() => changeCategory(category.name)}
                                                key={category.name}
                                            >
                                                {category.name} ({getCategoryCount(category.name)})
                                            </li>
                                        ))}
                                        <li class='foodMenu__item'>Chineese Starters (30)</li>
                                        <li class='foodMenu__item'>Chinese Main Course (75)</li>
                                        <li class='foodMenu__item'>Indian Main Course (63)</li>
                                        <li class='foodMenu__item'>Rice & Pulao (7)</li>
                                        <li class='foodMenu__item'>Desserts (1)</li>
                                        <li class='foodMenu__item'>Soup & wonton (15)</li>
                                        <li class='foodMenu__item'>Accompaniment (4)</li>
                                        <li class='foodMenu__item'>Biryani (1)</li>
                                    </ul>
                                    <div class='foodMenu__template'>
                                        <h2 class='foodMenu__template__title'>{currentCategory.value}</h2>
                                        <ul class='foodMenu__template__list'>
                                            {filteredProducts.value.map((product, index) => (
                                                <li class='foodMenu__template__info' key={index}>
                                                    <div class="image">
                                                        <img src={product.imageUrl} alt="foodMenuImage" class="foodMenuImage" />
                                                    </div>
                                                    <div class='content'>
                                                        <h3>{product.title}</h3>
                                                        <p>MUST TRY</p>
                                                        <div class='foodMenu__cp'>
                                                            <div class='foodMenu__star'>
                                                                <i class="bi bi-star-fill star text-warning"></i>
                                                                <i class="bi bi-star-fill star text-warning"></i>
                                                                <i class="bi bi-star-fill star text-warning"></i>
                                                                <i class="bi bi-star-fill star text-warning"></i>
                                                                <i class="bi bi-star-fill star text-warning"></i>
                                                            </div>
                                                            <span class='score'>{product.starlevel}</span>
                                                        </div>
                                                        <p> <del>${product.origin_price}</del> ${product.price} <span class="align-top">80% off</span></p>
                                                        <p>(4 Pcs mutton in chicken keema gravy)</p>
                                                    </div>
                                                    <button type="button" class='btn__add btn-outline-primary btn' data-id={product.id} data-num={product.num}>ADD <span class='material-symbols-outlined'>
                                                        add
                                                    </span>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class='tab-pane tab-pane fade' id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
                            <div class='tab-pane tab-pane fade' id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
