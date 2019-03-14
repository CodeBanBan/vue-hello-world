import bService from './base-service'
import { JSON_PLACEHOLDER_URL } from '../configs/service-url'

console.log(JSON_PLACEHOLDER_URL)
const urlTodo = JSON_PLACEHOLDER_URL.TODO

const get = async (id) => {
  const url = `${urlTodo}/${id}`
  const result = await bService.get(url)

  return result
}

export default {
  get
}
