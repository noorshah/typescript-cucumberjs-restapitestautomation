import{Given,Then} from 'cucumber'
import {expect} from 'chai'

    Given('I am calling a test api', async function () {
        this.getResponseStatusCode = (await this.get('https://jsonplaceholder.typicode.com/posts/1')).statusCode
        // const postResponse =await this.post()
        this.putResponseStatusCode = await this.put()
        this.deleteResponseStatusCode = await this.delete()
        
    })

  Then('I should see responce code {int}',  function (StatusCode) {
      expect(this.getResponseStatusCode).to.equal(StatusCode)
      expect(this.putResponseStatusCode).to.equal(StatusCode)
      expect(this.deleteResponseStatusCode).to.equal(StatusCode) 
    })