import React from 'react'

import DiaryAddForm from './DiaryAddForm'

class Diary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Diary: [{ Name: "Jadon", Date: "16/06/2016", Location: "Home", Subject: "Jadon's 1st Birthday party!", Img: "/../../public/IMG_2176.jpg" }]
        }
        this.addDiary = this.addDiary.bind(this)

    }
    addDiary(Diary) {
        const Diarys = this.state.Diary
        Diarys.push(Diary)
        this.setState({ Diary: Diarys })
    }
    render() { 
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
                    <h3>  {Diary.Img}</h3>
                    </div>
              
                ))}
            </div>
        )
    }
}


export default Diary