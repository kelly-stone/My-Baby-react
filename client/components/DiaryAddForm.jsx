import React from 'react'

class DiaryAddForm extends React.Component{
    constructor(props) {
        super(props)
        this .state={
            Diary:{Name:"", Date:"", Location:"",Suject:"", Img:""}
        }
this.submit = this.submit.bind(this)
this.updateDetail = this.updateDetail.bind(this)
}

submit(e){
    e.preventDefault()
    const Diary = this.state.Diary
    console.log({Diary})
    this.props.addDiary(Diary)
}

updateDetail(e){
    const Diary = this.state.Diary
    Diary[e.target.name] = e.target.value
    this.setState({Diary})
}
    render(){
    return(
        <form onSubmit = {this.submit}>
            <input placeholder="child name" type="text" name="Name"/>
            <input placeholder="dd/mm/yy" type="text" name="Date"/>
            <input placeholder="where" type="text" name="Location"/>
            <input placeholder="what happen" type="text" name="Subject"/>
            <input placeholder="photo" type="text" name="Img"/>
            <input type="submit" value="add me"/>
        </form>
    )



    } 








    


}


export default DiaryAddForm