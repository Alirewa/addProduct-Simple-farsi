const form = document.querySelector('#form')
const title = document.querySelector('#title')
const price = document.querySelector('#price')
const products = document.querySelector('#products')

const addProduct = (event) => {
  event.preventDefault()
  const productItem = document.createElement('li')
  const productInfo = document.createTextNode(`نام محصول: ${title.value} - قیمت: ${price.value}`)
  productItem.appendChild(productInfo)

  products.appendChild(productItem)

  title.value = ''
  price.value = ''
}

form.addEventListener('submit', addProduct)
