import React,{Component}  from 'react';
class Test extends Component{


    onLogPropsvalue=()=>{
        const {hello}=this.props;
        console.log(hello);
    }


    render(){
        const {hello}=this.props;
        console.log(hello);
        
        return(
            <>
                <h1 style={{color:'red'}} className='ml-5 text-success'>TEST</h1>
                <button onClick={ () => this.onLogPropsvalue} className='btn btn-danger ml-5 rounded-circle border-info'>Click me</button>
            </>
        )
    }
}
export default Test;