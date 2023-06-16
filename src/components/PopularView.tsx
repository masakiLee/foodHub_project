import { defineComponent } from 'vue'
import '../assets/scss/layout/_popular.scss'

const PopularView = defineComponent({
    name: 'PopularView',
    render() {
        return (
            <section class='popular'>
                <div class="container">
                    <div class="popular__content">
                        <h2 class='popular__title'>Popular Localities In & Around New York</h2>
                        <div class='popular__localities'>
                            <ul class="popular__list">
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Newport <span class='popular__places text-secondary'>(26 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Brooklyn <span class='popular__places text-secondary'>(14 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chinatown <span class='popular__places text-secondary'>(10 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chelsea <span class='popular__places text-secondary'>(20 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Coney Island <span class='popular__places text-secondary'>(6 places)</span></a>
                                </li>
                            </ul>
                            <ul class="popular__list">
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Newport <span class='popular__places text-secondary'>(26 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Brooklyn <span class='popular__places text-secondary'>(14 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chinatown <span class='popular__places text-secondary'>(10 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chelsea <span class='popular__places text-secondary'>(20 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Coney Island <span class='popular__places text-secondary'>(6 places)</span></a>
                                </li>
                            </ul>
                            <ul class="popular__list">
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Newport <span class='popular__places text-secondary'>(26 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Brooklyn <span class='popular__places text-secondary'>(14 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chinatown <span class='popular__places text-secondary'>(10 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chelsea <span class='popular__places text-secondary'>(20 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Coney Island <span class='popular__places text-secondary'>(6 places)</span></a>
                                </li>
                            </ul>
                            <ul class="popular__list">
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Newport <span class='popular__places text-secondary'>(26 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Brooklyn <span class='popular__places text-secondary'>(14 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chinatown <span class='popular__places text-secondary'>(10 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Chelsea <span class='popular__places text-secondary'>(20 places)</span></a>
                                </li>
                                <li class='popular__item'>
                                    <a href="#" class='popular__link text-black'>Coney Island <span class='popular__places text-secondary'>(6 places)</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
})

export default PopularView
