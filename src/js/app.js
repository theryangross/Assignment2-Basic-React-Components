var root = document.getElementById("root");

const app = () => 
{
    return React.createElement('div', {}, [
            React.createElement(FormInput, 
            {
                itemone: "Email",
                itemtwo: "Zip Code",
                itemthree: "submit"
            }),
    ])
}

ReactDOM.render(React.createElement(App), root);