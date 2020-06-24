import {Given,When,Then} from 'cucumber'
import {expect} from 'chai'
import jsonpath from 'jsonpath'


Given('I call countries of the world', async function () {
   this.countriesResponse = await this.get('https://restcountries.eu/rest/v2/all')
})



Then('I should get response {int}', function (Code: number) {
    expect(this.countriesResponse.statusCode).to.equal(Code)
})


Then('I should see {string} in the response', function (country: string) {
    var countries=JSON.parse(this.countriesResponse.body)
    var countriesList=jsonpath.query(countries,'$..name')
    expect(countriesList).to.include(country)
})

Given('I call information for italy', async function () {
    this.italyInformation = await this.get('https://restcountries.eu/rest/v2/name/italy')
})

Then('its schema should be correct', function () {
    //to be implemented
})