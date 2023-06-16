import { defineComponent, ref, onMounted } from 'vue'
import HeaderView from '@/components/HeaderView'
import PopularView from '@/components/PopularView'
import FooterView from '@/components/FooterView'
import { RouterView, useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const showHeader = ref(true);
        const route = useRoute();

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        const handleScroll = () => {
            const { path } = route;

            if (
                path === '/ResturantTwoColumn' ||
                path.includes('/foodMenu') ||
                (path === '/' && window.scrollY < 320)
            ) {
                showHeader.value = true;
            } else {
                showHeader.value = window.scrollY >= 320;
            }
        };

        return {
            showHeader
        };
    },

    render() {
        return (
            <>
                {this.showHeader && <HeaderView />}
                <RouterView />
                <PopularView />
                <FooterView />
            </>
        )
    }
})