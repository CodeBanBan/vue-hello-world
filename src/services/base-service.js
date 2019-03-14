import router from '../router'

const get = async (url) => {
  try {
    const res = await fetch(url)

    if (res.status === 404) {
      console.log('Not found', 'Fetch util')
      router.push('/')
      return 'xxxxx'
    }

    return res.json()
  } catch (ex) {
    console.log(ex, 'Fetch Error')
  }
}

export default {
  get
}
