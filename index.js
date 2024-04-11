function show() {
  var url = document.querySelector('.inp').value
  fetch(`http://localhost:8080/data/${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      displayData(data)
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error)
    })
}

function displayData(data) {
  let ds = document.querySelector('.hide')
  ds.style.display = 'block'
  const name = document.querySelector('.name')
  const phone = document.querySelector('.phone')
  const age = document.querySelector('.age')
  const dp = document.querySelector('.dp')
  const location = document.querySelector('.local')
  const marital = document.querySelector('.mar')
  const occupation = document.querySelector('.occ')

  name.innerHTML = data.name
  phone.innerHTML = data.ph_no
  age.innerHTML = data.age
  dp.innerHTML = data.dp
  location.innerHTML = data.location
  marital.innerHTML = data.marital
  occupation.innerHTML = data.occupation
}
