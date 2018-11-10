import React from 'react'

// import DiaryAddForm from './DiaryAddForm'

class Diary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // diary:[{Name:"", Date:"", Location:"",Suject:"", Img:""}]
        }
       

        }
        addDiary(diary) {
            const diarys = this.state.diarys
            diarys.push(diary)
            this.setState({diarys:diary})
    }
    render(){
        return(
            <div>
                <h2>You are my little angel</h2>
                {/* <DiaryAddForm /> */}
            </div>
        )
    }
}












export default Diary