import React from 'react';
import ReactDOM from 'react-dom';


//This is the smaller Component which will get passed into the Higher Order Component (HOC)
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


//This is a regular function, not a Compoment itself, which takes the smaller Component (passed in as the wrappedComponent), and wraps it in a HOC (the resulting <WrappedComponent/>).
const withAdminWarning = (WrappedComponent) => {
    {/* all the props from the render call get passed in collectively here*/}
    return (props) => ( 
        <div>
            {props.isAdmin && <p>Here are the details</p>} {/*Can utilize the props individually here */}
            <WrappedComponent {...props}/> {/*The Info Component from the call below (or whatever other element is passed in) comes out here 
                                            Using the spread operator spreads out all the props passed in in the render call below.s*/}
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to see the info.</p>
            )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

//Calling the function above with the Component you want wrapped, and returning it into a const, gives you the final Component, which is what gets rendered below, instead of the original smaller Component.
const AdminInfo = withAdminWarning(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'));
