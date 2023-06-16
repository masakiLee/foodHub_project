import { defineComponent } from 'vue'
import '@/assets/scss/layout/_footer.scss'
import logo from '@/assets/images/logo.png'
import app_google from '@/assets/images/google-play.png'
import app_store from '@/assets/images/app-store.png'

const FooterView = defineComponent({
    name: 'FooterView',
    render() {
        return (
            <footer class='footer'>
                <div class="container">
                    <div class='footer__content'>
                        <div class="footer__info">
                            <img src={logo} alt="logo" class='footer__logo' />
                            <p class='footer__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in
                                gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit
                                at amet.
                            </p>
                            <div class='footer__download'>
                                <img
                                    src={app_google}
                                    alt="google"
                                    class='footer__app'
                                />
                                <img
                                    src={app_store}
                                    alt="app"
                                    class='footer__app'
                                />
                            </div>
                        </div>
                        <div class="footer__about">
                            <h2 class='footer__title'>About Us</h2>
                            <ul class='footer__list'>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Careers</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Our Stores</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Our Cares</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Terms & Conditions</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer__customer">
                            <h2 class='footer__title'>Customer Care</h2>
                            <ul class='footer__list'>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Help Center</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>How to Buy</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Track Your Order</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Corporate & Bulk Purchasing</a>
                                </li>
                                <li class='footer__item'>
                                    <a href="#" class='footer__link'>Returns & Refunds</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer__contact">
                            <h2 class='footer__title'>Contact Us</h2>
                            <ul class='footer__list'>
                                <li class='footer__item'>
                                    Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email: uilib@gmail.com Phone: +880 1123 456 780
                                </li>
                                <li class='footer__item'>
                                    Sylhet, Bangladesh.
                                </li>
                                <li class='footer__item'>
                                    Email: uilib@gmail.com
                                </li>
                                <li class='footer__item'>
                                    Phone: +880 1123 456 780
                                </li>
                            </ul>
                            <ul class='footer__social__list'>
                                <li class='footer__social__item'>
                                    <a href="#" class='footer__social__link'>
                                        <i class="bi bi-facebook footer__social__icon text-white"></i>
                                    </a>
                                </li>
                                <li class='footer__social__item'>
                                    <a href="#" class='footer__social__link'>
                                        <i class="bi bi-twitter footer__social__icon text-white"></i>
                                    </a>
                                </li>
                                <li class='footer__social__item'>
                                    <a href="#" class='footer__social__link'>
                                        <i class="bi bi-instagram footer__social__icon text-white"></i>
                                    </a>
                                </li>
                                <li class='footer__social__item'>
                                    <a href="#" class='footer__social__link'>
                                        <i class="bi bi-youtube footer__social__icon text-white"></i>
                                    </a>
                                </li>
                                <li class='footer__social__item'>
                                    <a href="#" class='footer__social__link'>
                                        <i class="bi bi-google footer__social__icon text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
})

export default FooterView
