import React,{ Component } from 'react'
  
class Form extends Component{
  constructor(props){
    super(props)
    this.state = { email:'',password:'', mensagem:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(event){
    const { email, password,} = this.state
    if(this.state.email === 'leonardo@pucpr.br' && this.state.password ==='123456'){
      this.setState({mensagem: 'Acessado com sucesso'})
    }
    else {
      this.setState({mensagem: 'Usuário ou senha incorreto!'})
    }
    event.preventDefault();
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
    
  }
  render(){
    return(
      <form>
        <h2>Login</h2>
        <div>
          <label htmlFor='email'>Email: </label>
          <input 
            name='email'
            placeholder='Email' 
            value = {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Senha: </label>
          <input
            name='password' 
            placeholder='Senha'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Acessar</button>
        </div>
        <div>{this.state.mensagem}</div>
      </form>
    )
  }
}
  
export default Form