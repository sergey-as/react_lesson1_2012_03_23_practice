import './App.css';
import React from "react";

// parent
// child
// Children -- props

// const Header = (props) => {
//     console.log(props);
//     return (
//         <header>
//             <h1>Title</h1>
//             <button>Cart</button>
//             {props.children}
//         </header>
//     )
// }

class Header extends React.Component {

    render() {
        const countItemsInCart = 0;

        return (
            <header>
                <h1>Title {this.props.test}</h1>
                <h1>Title {this.props.title()}</h1>
                <h1>Title {this.props.title('hello')}</h1>
                <button>Cart {countItemsInCart}</button>
                {this.props.children}
            </header>
        )
    }
}

function App({test}) {
    // console.log(test);
    const test1 = () => (
        <h1>!!!</h1>
    )
    const test2 = <h1>!!!</h1>;

    const chek = () => {
        if (false) {

        } else {
            return 3210
        }
    }

    const condRender = () => 2 > Math.random() * 5 && <h2>H222</h2>

    return (

        <div className="App">
            {test()}

            {5 > 3 ? 'hello' : 'world'} //expression

            {/*{2 > Math.random() * 5 ? <h2>H2</h2>: null}*/}
            {2 > Math.random() * 5 && <h2>H22</h2>}
            {condRender()}

            {test1()}
            {test2}
            {chek()}

            {/*Так ніколи не робити, просто, щобзнати, що так можна:*/}
            {/*{(() => {*/}
            {/*    if (2 > Math.random() * 5) {*/}
            {/*        return 'bigger'*/}
            {/*    } else {*/}
            {/*        return 'smaller'*/}
            {/*    }*/}
            {/*})()}*/}

            {/*<Header children={1}/>*/}
            <Header title={test}>
                {/*<h3>test</h3>*/}
                {/*<p>test</p>*/}
                {test()}
            </Header>
        </div>
    );
}

export default App;
