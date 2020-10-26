import  React, {Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
class Main extends Component{

    constructor(){
        
        super()
        const referenceToOurParent = this
        //We are re assigning the this.removephoto by creating a copy of the previous this.removephoto and rewiring the 'this' keyword
        this.onRemovePhoto = onRemovePhoto.bind(this)

        function onRemovePhoto(postRemoved){
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
        /*
        obj = {
            k1:{
                k11:v11,
                k12:v12,
                k13:{
                    k131:v131,
                    k132:[1,2,3,4,5,6]
                }
            },
            k2:v2
        }
        */
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
            ]
        }
    }
//Assuming the argument to this to
    

    render(){
       
     
        return <div>
            <Title />
            <Photowall posts={this.state.posts} onRemovePhoto ={this.onRemovePhoto}/>
            </div>
    }

}

export default Main
