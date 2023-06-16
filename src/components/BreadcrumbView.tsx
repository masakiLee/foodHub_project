import { defineComponent } from 'vue'
import '../assets/scss/layout/_breadcrumb.scss'
import { RouterLink } from 'vue-router'

const BreadcrumbView = defineComponent({
    name: 'BreadcrumbView',
    render() {
        return (
            <div class="container">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class='breadcrumb breadcrumb'>
                        <li class='breadcrumb__item breadcrumb-item'><RouterLink to='/'>Home</RouterLink></li>
                        <li class='breadcrumb__item breadcrumb-item'><a href="#">New York</a></li>
                        <li class='breadcrumb__item active breadcrumb-item active' aria-current="page">Resturants</li>
                    </ol>
                </nav>
            </div>
        )
    }
})

export default BreadcrumbView
