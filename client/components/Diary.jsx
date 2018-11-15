import React from 'react'

// import assets from '../../assets'

import DiaryAddForm from './DiaryAddForm'
// import Img from './Img'

class Diary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Diary: [{ Name: "Jadon", Date: "16/06/2016", Location: "Home", Subject: "Jadon's 1st Birthday party!", Img: "IMG_2176.jpg" }]
        }
        this.addDiary = this.addDiary.bind(this)

    }
    addDiary(Diary) {
        const Diarys = this.state.Diary
        Diarys.push(Diary)
        this.setState({ Diary: Diarys })
    }
    render() { 
        // const Img = assets('./IMG_2176.jpg')
        return (
            <div>
                <h2>You are my little angel</h2>
                <DiaryAddForm addDiary={this.addDiary} />

                {this.state.Diary.map(Diary =>(
              
                    <div>
                    <h3>My name is:   {Diary.Name}</h3>
                    <h3>Special Date:  {Diary.Date}</h3>
                    <h3>Place held on the event:  {Diary.Location}</h3>
                    <h3>Hightlights of this event:  {Diary.Subject}</h3>
                    <h3>  <img src={Diary.Image} /></h3>
                    </div>
              
                ))}
            </div>
        )
    }
}


export default Diary