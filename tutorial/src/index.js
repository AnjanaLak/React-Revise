import React from 'react';
import ReactDom from 'react-dom';
// stateless functional component
// always return jsx

// importing css
import '../src/index.css'

///////////// JSX Rules ////////////////////////////
// return single element
// div/sec/article or fragment
// use camelcase for html attribute
// className instead of class
// close every element
// formatting

///////////////////////////////////////////////////

// function Greeting(){
//     return (
//         <React.Fragment>
//         <h4>This is Anjana!!</h4>
//         </React.Fragment>
//     )
// }

/////////////////////////

// function Greeting(){
//     return (
//         <React.Fragment>
//         <h4>This is Anjana!!</h4>
//         <img src="" alt=""/>
//         {/* it is essentially require a closing tag asshown in img above */}
//         </React.Fragment>
//     )
// }

/////////////////////////////////////////////////////

// The use of props

// const Book = (props) => {
//     console.log(props)
//     return(
//       <>
//       <p>This is haaa haaa!!</p>
//       <p>{props.title}</p>
//       <p>{props.author}</p>
//       </>
//     )
// }

// Use of childern in props

const Book = ({title, author, children}) => {
    return(
      <>
      <p>This is haaa haaa!!</p>
      <p>{title}</p>
      <p>{author}</p>
      {/* The use of childern */}
      {children}
      {/* note that  "children" word is reserved so that must use this*/}
      </>
    )
}



////////////////////////////////////////////////////

function Greeting(){
    return (
        <React.Fragment>
            {/* notice the "className" is used instead "class" below */}
        <h4 className="NameHeader">This is Anjana!!</h4>
        {/* <img src="" alt=""/> */}
        {/* THe use of inline style is given below */}
        <h3 style={{color: 'yellow'}}>This is Anjana!!</h3>
        <Person/>
        <Person/>
        {/* The use of props */}
        <Book title="ABCD" author="Anja"/>
        <Book title="PQRS" />
        <Book title="WXYZ">
            {/* We cannot display elements which are not components as shown above. But using "Children" we can display the below <p> */}
        <p>This is a part of the children of the props</p>
        </Book>
        {/* it is essentially require a closing tag asshown in img above */}
        </React.Fragment>
    )
}

const Person = () => <h2>Bitch</h2>


// const An = () => {
//     return React.createElement(
//         'div',
//          {},
//          React.createElement('h1', {}, 'Hello') );
// }


ReactDom.render(<Greeting/>, document.getElementById('root'))
