import {World, setWorldConstructor,setDefaultTimeout}from 'cucumber'
import got  from'got'
import jsonpath from 'jsonpath'

interface Response { statusCode: number, body?: any }

class ApiHelper implements World{

    getResponseStatusCode: any
    putResponseStatusCode: any
    deleteResponseStatusCode: any
    countriesResponse: any
    italyInformation: any

    constructor(){
       
    }

    async get(url: string): Promise<Response>{
      const response= await got.get(url)
      return response
    }

    async post(): Promise<number>{
        const response= await got.post('https://jsonplaceholder.typicode.com/posts/1',
                                        {json: {
                                            title: 'foo',
                                            body: 'bar',
                                            userId: 1},
                                        responseType:"json",
                                        headers: { "Content-type": "application/json; charset=UTF-8" }
                                        })
        return response.statusCode
    }

    async put(): Promise<number>{
        const response= await got.put('https://jsonplaceholder.typicode.com/posts/1',
                                        {json: {
                                            tid: 1,
                                            title: 'foo',
                                            body: 'bar',
                                            userId: 1},
                                        responseType:"json",
                                        headers: { "Content-type": "application/json; charset=UTF-8" }
                                        })
        return response.statusCode
    }


    async delete(): Promise<number>{
        const response= await got.delete('https://jsonplaceholder.typicode.com/posts/1')
        return response.statusCode
    }

    async get_countries(){
        const response= this.get('https://restcountries.eu/rest/v2/all')
        return response
    }

}
export const apiHelper= new ApiHelper()
setWorldConstructor(ApiHelper)
setDefaultTimeout(5 * 1000)