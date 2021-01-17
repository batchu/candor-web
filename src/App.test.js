import {shallow} from 'enzyme'
import App from './App'

describe('unit tests for the App component', ()=>{

    it("When calling the 'sum' method by passing two numbers, expect the sum of the numbers",()=>{
        const app = new App()
        const resp= app.add(5,6)
        expect(resp).toEqual(11)
     })

})

describe('render tests for the App component',()=>{
    
    it('App component should contain a div with the class "app"',()=>{
        const wrapper = shallow(<App />)
        expect(wrapper.contains(<div className="app" />)).toEqual(true)
    })

})