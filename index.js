var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var spr = document.querySelector('.spr')
var vim = document.querySelector('.vim')
var btn3 = document.querySelector('.btn3')
var btn4 = document.querySelector('.btn4')
var h2 = document.querySelector('.h2')

btn1.addEventListener('click', (e) => {
  e.preventDefault()
  if (spr.style.display === 'block') {
    spr.style.display = 'none'
  } else {
    spr.style.display = 'block'
  }
})

btn2.addEventListener('click', (e) => {
  e.preventDefault()
  if (vim.style.display === 'block') {
    vim.style.display = 'none'
  } else {
    vim.style.display = 'block'
  }
})

var count = 0

function add() {
  h2.innerHTML = count += 1
}

function dec() {
  h2.innerHTML = count -= 1
}

setInterval(() => {
  add()
}, 1)
