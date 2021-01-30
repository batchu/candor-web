import  React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class Main extends Component{

    constructor(){

        super()
        this.onRemovePhoto = this.onRemovePhoto.bind(this)
       
        this.state ={
             posts: [
                {
                    id:0,
                    description:'Beautiful landscape',
                    imageLink: 'https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg'
                },
                {
                    id:1,
                    description: 'Alien space ship',
                    imageLink: 'https://media2.s-nbcnews.com/j/newscms/2018_01/2280531/180103-ufo-illustration-mn-1015_0758c11fb1637ed3431613cef06cd246.fit-760w.jpg'
                },
                {
                    id:2,
                    description:'Maldives',
                    imageLink: 'https://conradhotels3.hilton.com/resources/media/ch/MLEHICI/en_US/img/shared/full_page_image_gallery/main/CN_sparetreat1_3_700x525_FitToBoxSmallDimension_Center.jpg'
                },
                {
                    id:3,
                    description: 'Waterfall',
                    imageLink: 'https://www.treehugger.com/thmb/SOpDZSvikfySQ0Vf2BNzDF0Q8Mk=/889x667/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__04__Ban-Gioc-Detian-Falls-Greenery-Jungle-Forest-9391cfc25be640fe8609f94d92c7a3c8.jpg'
                }
            ],
            screen: 'photos'
        }
    }
//Assuming the argument to this to
    
onAddPhoto(post){
    this.setState(
        (state)=>(
            {
                posts: state.posts.concat([post])
            }
        )
    )
          
      }
  onRemovePhoto(postRemoved){
    //id =0
    console.log(`Removing the photo with the description ${postRemoved.description}`)
    this.setState(
        (state)=>(
            {
                posts: state.posts.filter(post=> post.id !== postRemoved.id)
            }
        )
    )
}

    render(){
       
     
        return   <Router>
      <div>
      <Title />
        <Switch>
        <Route  path="/AddPhoto" 
        render = {
            ({history})=>(
              
                    <AddPhoto onAddPhoto = {(post)=> {
                        this.onAddPhoto(post)
                        history.push('/')
                    }} />
                
            )
        }/>
          <Route path="/" 
          render = {
              ()=>(
                <PhotoWall posts={this.state.posts} onRemovePhoto ={this.onRemovePhoto}/>
              )
          }
          />
         
        </Switch>
      </div>
    </Router>
    }

}

export default Main
