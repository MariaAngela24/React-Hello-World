// Common naming convention for React components is to capitalize 
// all words
var Greeter = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello React!</h1>
                <p>This is from a component</p>
            </div>
            );
    }
});

// This is running the ReactDOM function, which we can do 
//because we imported ReactDOM in index.html
 ReactDOM.render(
    <Greeter/>,
    // This is the location to render the content we passed in above
    document.getElementById('app')
);