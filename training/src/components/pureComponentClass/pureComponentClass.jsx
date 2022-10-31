import React from 'react';


export default class PureComponentClass extends React.PureComponent {
    render() {
        console.log('------------');
        console.log('PureComponentClass');
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
// eslint-disable-next-line no-lone-blocks
{/*
export default class PureComponentClass extends React.Component {
    render() {
        console.log('------------');
        console.log('PureComponentClass');
        return <p>{this.props.string}</p>
    }
}
если оставить просто Component вверху, то не будет проверяться меняется props.string или нет и будет
выводится всегда, а если написать   React.PureComponent  то будет проверка и если ничего не поменяется,
 то рендера не будет
*/}