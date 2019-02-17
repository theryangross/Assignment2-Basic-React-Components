/*<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  */

const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('input', 
            {
                className: "form-control",
                type: "email",
                id: "exampleInputEmail1",
                placeholder: "Email"
            },
            props.itemone),

            React.createElement('input', 
            {
                className: "form-control",
                type: "text",
                id: "inputZip",
                placeholder: "Zip Code"
            },
            props.itemtwo),

            React.createElement('button', 
            {
                className: "btn btn-primary",
                type: "submit",
                placeholder: "submit"
            },
            props.itemthree)
        ]
    )
}

ReactDOM.render(React.createElement(FormInput), root);