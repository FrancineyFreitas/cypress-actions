const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ2ZTFkYmE5LTZiY2EtNDg1Zi05OTUyLTA1OWVmNTc1MGE4NC0xNzI2ODU5NTY2NTU3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjZhYThlMWEtMDEyMy00OGQ4LWIxMDktNjRlZDMwNTIwOTVhIiwidHlwZSI6InQifQ.HzhTHqlHKTBAALhY5lPqzdWW2y0TFbNy2aFXw57hTYo"

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
