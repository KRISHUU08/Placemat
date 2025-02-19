import React from "react"

class UserClass extends React.Component{


    constructor(props) {
        super(props);
       // console.log(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "Default",
                avatar_url: ""

            },
        };
        //console.log(this.props.Name+"C constructor");

    }
    

     async componentDidMount() {           
        //API data

        const token = "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";
        const data = await fetch("https://api.github.com/users/KRISHUU08",
        
        {
            headers: {
                Authorization: `Bearer ${token}`, // Add the Authorization header
            },
        }
        
        );
        const json = await data.json();


        this.setState({
            userInfo: json,
        });

        console.log(json);

    }

    componentWillUnmount() {
        console.log("cwu called");
    }

    render() {
    // const {Name,Location, ContactUs} = this.props;
    const {name,location,avatar_url} = this.state.userInfo;


    //console.log(this.props.Name + "c render");
        
        return (
        <div className="user-component">
            <img src={avatar_url} />
            <h2>{name}</h2>
            <h2>{location}</h2>
            
        </div>
        );
    }

};

export default UserClass;