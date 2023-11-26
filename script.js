const cookieConsent = document.getElementById('cookie-consent')
const declineBtn = document.getElementById('decline')
const btnContainer = document.getElementById('btn-container')
const consentForm = document.getElementById('consent-form')
const main = document.getElementById('main')
const closeBtn = document.getElementById('close-btn')

setTimeout(() => {
    cookieConsent.style.display = 'block'
}, 1500)

closeBtn.addEventListener('click', () => {
    cookieConsent.style.display = 'none'
})

declineBtn.addEventListener('mouseover', () => {
    btnContainer.classList.toggle('reverse')
})

cookieConsent.addEventListener('submit', (e) => {
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get('name')
    const email = consentFormData.get('email')

    main.innerHTML = `
        <h1>Ez dumbass</h1>
        <p>Selling your data to the black market</p>
    `

    setTimeout(() => {
        main.innerHTML = `
            <h1>Words from the Black Market</h1>
            <h3>Your name is ${name}</h3>
            <h3>Your email is ${email}</h3>
            <h2>Did I got that right?</h2>
        `

        closeBtn.disabled = false
    },1500)
})