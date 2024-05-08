const button = document.querySelector('#btn')
const userInput = document.querySelector('#userInput')

button.addEventListener('click', () => {
  userInput.value = ''
  alert("Bekräftelse på genomförd bokning kommer att skickas via e-mail. STÄNG denna sida och återgå till Festivalsidan med knappen nedan");  )
})
