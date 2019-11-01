import React, {Component} from 'react';


const ValidationComponent = (props) => {

        let validationMsg = "Text long enough";

        if( props.title <= 5){
            validationMsg = "Text too short";
        }

        return(
            <div className="validation-component">
                <h3>Validation Component</h3>
                {validationMsg}               
            </div>
        )
    
}

export default ValidationComponent