import React from 'react'


class DiaryAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Diary: { Name: "", Date: "", Location: "", Suject: "", Image: "" }
        }
        this.submit = this.submit.bind(this)
        this.updateDetail = this.updateDetail.bind(this)
    }
    
    submit(e) {
        e.preventDefault()
        const Diary = this.state.Diary
       
        this.props.addDiary(Diary)
    }

    updateDetail(e) {
        const Diary = this.state.Diary
       
        Diary[e.target.name] = e.target.value
        this.setState({ Diary })
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                Child Name:   <input placeholder="child name" type="text" name="Name" onChange={this.updateDetail} /><br></br><br></br>
                Age:          <input placeholder="year old" type="text" name="Date" onChange={this.updateDetail} /><br></br><br></br>
                Location:     <input placeholder="where" type="text" name="Location" onChange={this.updateDetail} /><br></br><br></br>
                Event:        <input placeholder="what happen" type="text" name="Subject" onChange={this.updateDetail} /><br></br><br></br>
                Image:        <input placeholder="photo" type="file" name="Image" onChange={this.updateDetail} /><br></br><br></br>
            <input type="submit" value="add me" />
            </form>
        )



    }











}


export default DiaryAddForm