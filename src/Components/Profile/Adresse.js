import React, { Components } from 'react';
class Adresse extends Components {
    state = { adresse: "Sfax gremda" }
    render() {
        const handleClick = () => {
            const newAdress = prompt(('enter your address'))
            this.setState({ adresse: newAdress })
        }
        return (
            <div>
                <h1> this is my address: {this.state.adresse}</h1>
                <button onClick={handleClick}> Change Adress</button>
            </div>);
    }
}

export default Adresse;