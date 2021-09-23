import React from "react";

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Nombre: '', Apellido: '', Edad: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({value: e.target.value});
    }
  
    handleSubmit(e) {
      alert('Se a intruducido valores: ' + this.state.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            
                <label>Nombre:
                    <input type="text" 
                    max="10" 
                    name="Nombre" 
                    value={this.state.Nombre} onChange={this.handleChange} 
                    placeholder= "Ingrese Nombre"/>
                </label>    
            
            <div>
                <label>Apellido:</label>
                    <input type="text" max="10" value={this.state.Apellido} onChange={this.handleChange} />
            </div> 

            <div>
                <label>Edad:</label>
                    <input value={this.state.Edad} onChange={this.handleChange} />
            </div>
                <input type="submit" value="Añadir Usuarios" />
            <div>
        <span>{JSON.stringify(this.state)}</span>
      </div> 
        </form>
      );
    }
  }
export default Formulario;

