<template>
    <div class="container">
      <h1>This is Sub ###1 : {{title || '[No Title]'}}</h1>
    </div>
</template>

<script>
import jpService from '../../../services/json-placeholder-service'

export default {
  name: 'sub1',
  props: ['title'],
  components: {},
  async created () {
    // fetch the data when the view is created and the data is
    // already being observed
    console.log('--->>> About Main :: created')
    await this.fetchData()
    console.log('--->>> About Main :: created - end')
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    async fetchData () {
      const result = await jpService.get(1)
      console.log(result)

      return result
    }
  }
}
</script>
