import React, { Component } from 'react'
import './PersonBio.css'



 class PersonBio extends Component {

    constructor(props){
        super(props);
        this.state = {
          persons:[
            {
                name: "Gideon",
                description: "I am a developer"
              }
          ],
          
          name: "",
          description: ""
        };
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            description: this.state.description
    }

    this.setState({
        persons: [...this.state.persons, newPerson],
        name: "",
        description: ""
    })
    };

  render() {
    return (
      <>
    <div className="center">
  <h1>Our Newsletter</h1>
  <form onSubmit={this.handleSubmit}>
    <div className="inputbox">
      <input type="text" name='name' required="required" value={this.state.name} onChange={this.handleChange}/>
      <span>Name</span>
    </div>
    <div className="inputbox">
      <input type="text" name='description' required="required" value={this.state.description} onChange={this.handleChange}/>
      <span>Description</span>
    </div>
    <div >
      <button className="inputboxs">Submit</button>
    </div>
  </form>
</div>


    <section>
        {
            this.state.persons.map((item, index) => {
                return(
                    <div key={index}>
                    <h3>Name: {item.name}</h3>
                    <h3>Role: {item.description}</h3>
                    </div>
                )
            })
        }
    </section>
    </>

    )
  }
}
export default PersonBio;
