import React from 'react';

/*export default class ComponentClass extends React.Component {
    state = {
        count: 0,
    }
    typeComponent = 'Class';


    logged = () => {
        this.setState({
            count: this.state.count + 1,
        }); 
        console.log(this.state.count);
    }
    render() {
        return (
            <div className='container'>
                <p>{this.typeComponent} {this.state.count}</p>
                <button onClick={this.logged}>Component</button>
            </div>
       
        )
    }
}*/
export default class ComponentClass extends React.Component {
    render() {
        console.log('------------');
        console.log('ComponentClass');
        return <p>{this.props.string}</p>
    }
}
// eslint-disable-next-line no-lone-blocks
{/* если фунция logged  будет не стрелочной,
   то мы не можем обращаться this.count, тогда надо в onClick писать {
    () => {
        this.logged()
    }
   }
*/}