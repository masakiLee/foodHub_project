import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    data: null as null | any,
    filter: {
      categories: [] as string[],
      starlevel: [] as string[],
      sortBy: ''
    }
  }),
  actions: {
    // get 商家資料
    async fetchData() {
      try {
        const categories = Array.from(this.filter.categories)
        const starlevel = Array.from(this.filter.starlevel)
        const sortBy = this.filter.sortBy

        const response = await axios.get('https://food-hub-json-server.vercel.app/store')

        const filteredData = response.data.filter(
          ({ description, star }: { description: string; star: number }) => {
            if (categories.length > 0) {
              const filterDescription = description.split(' ')

              const matchedValues = filterDescription.filter((value) => categories.includes(value))

              // 如果沒有匹配的值，則返回 false
              if (matchedValues.length === 0) {
                return false
              }
            }

            if (starlevel.length > 0) {
              const newStar = Math.min(...starlevel.map(Number))

              if (star < newStar) {
                return false
              }
            }

            return true
          }
        )
        // 根據 sortBy 排序
        filteredData.sort(
          (a: { price: number; star: number }, b: { price: number; star: number }) => {
            if (sortBy === 'peicelow') {
              return a.price - b.price
            }
            if (sortBy === 'pricehigh') {
              return b.price - a.price
            }
            if (sortBy === 'starlow') {
              return a.star - b.star
            }
            if (sortBy === 'starhigh') {
              return b.star - a.star
            }
            return 0
          }
        )

        this.data = filteredData
      } catch (error) {
        console.error(error)
      }
    },

    updateData(newData: { categories: any; starlevel: any; sortBy: any }) {
      const { categories, starlevel, sortBy } = newData
      this.filter.categories = Array.from(categories)
      this.filter.starlevel = Array.from(starlevel)
      this.filter.sortBy = sortBy
      this.fetchData()
    }
  }
})
