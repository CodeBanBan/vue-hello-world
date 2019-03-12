<template>
    <div class="container">
      <h1>This is Sub ###1 : {{title || '[No Title]'}}</h1>
    </div>
</template>

<script>

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
    fetchData () {
      console.log('--->>> About Main :: fetch')
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
  }
}
</script>
