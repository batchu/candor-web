import  React, {Component} from 'react'
import Title from './Title'
import Photowall from './Photowall'
class Main extends Component{

    constructor(){
        super()
        const posts= [
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
            }
        ]
    }


    render(){

        return <div>
            <Title />
            <Photowall />
            </div>
    }

}

export default Main