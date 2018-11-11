import React from 'react'

import DiaryAddForm from './DiaryAddForm'

class Diary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Diary:[{Name:"Jadon", Date:"10/06/2016", Location:"Home",Suject:"1st Birthday", Img:"/../../IMG_2176.jpg"}]
        }
       this.addDiary = this.addDiary.bind(this)

        }
        addDiary(Diary) {
            const Diarys = this.state.Diarys
            Diarys.push(Diary)
            this.setState({Diarys:Diarys})
    }
    render(){
        return(
            <div>
                <h2>You are my little angel</h2>
                <DiaryAddForm addDiary={this.addDiary}/>
               {/* {this.state.diarys.map(diary =>{
                    <div>
                    <h3>{diary.Name}</h3>,
                    <h3>{diary.Date}</h3>,
                    <h3>{diary.Location}</h3>,
                    <h3>{diary.Subject}</h3>,
                    <h3>{diary.Img}</h3>
                    </div> */}
                })} 
            </div>
        )
    }
}












export default Diary