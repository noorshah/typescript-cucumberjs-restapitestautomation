import{Given,Then} from 'cucumber'
import {expect} from 'chai'
import{apiHelper} from '../support/api-helper'

    Given('I am calling a test api', async function () {
        this.getResponseStatusCode = await apiHelper.get()
        // const postResponse =await this.post()
        this.putResponseStatusCode = await apiHelper.put()
        this.deleteResponseStatusCode = await apiHelper.delete()
        
    })

  Then('I should see responce code {int}',  function (StatusCode) {
      expect(this.getResponseStatusCode).to.equal(StatusCode)
      expect(this.putResponseStatusCode).to.equal(StatusCode)
      expect(this.deleteResponseStatusCode).to.equal(StatusCode) 
    })