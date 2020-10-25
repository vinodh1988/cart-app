import React from 'react';

class About extends React.Component
{
    render(){
        return(
            <h1>About component</h1>
        )
    }

    componentWillUnmount(){
        console.log("deleted about")
    }
   
    componentDidMount(){
        console.log("About mounted")
    }
}

export default About;