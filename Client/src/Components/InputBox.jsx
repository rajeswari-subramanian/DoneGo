import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Minput = styled.input`
    width: 52px;
    height:48px;
   
    margin: 5px;
    text-align: center;
    font-size:20px;  
`

export default class InputBox extends React.Component {
    constructor(props) {
        super(props)
        this.value = new Array(this.props.boxes).fill("")
        this.elements = []
        this.condition = false
    }

    handleInput = (e, i) => {
        this.value[i] = e.target.value
        this.props.operation(this.value.join(""), this.props.boxes)
        if ((i + 1) < this.value.length && e.target.value !== "") {
            this.elements[i + 1].focus()
        }
    }

    deleteInput = (e, i) => {
        const key = e.key;
        if (key === "Backspace" && (i - 1) >= 0 && this.value[i] === "") {
            this.value[i] = e.target.value
            this.props.operation(this.value.join(""), this.props.boxes)
            this.elements[i - 1].focus()

        }
    }

    handlePaste = (e) => {
        const pasted = e.clipboardData.getData("Text").split("")
        const req = pasted.slice(0, this.props.boxes)
        for (let i = 0; i < req.length; i++) {
            this.value[i] = req[i]
        }
        this.props.operation(this.value.join(""), this.props.boxes)
    };

    componentDidMount() {
        this.elements[0].focus();
    }

    render() {
        return (
            <div>
                {
                    this.value.map((item, index) => (
                        <Minput
                            maxLength='1'
                            onPaste={this.handlePaste}
                            ref={(elem) => this.elements[index] = elem}
                            onChange={(e) => this.handleInput(e, index)}
                            onKeyDown={(e) => this.deleteInput(e, index)}
                            key={index}
                            value={this.value[index]}
                        />
                    ))
                }
            </div>
        )
    }
}


InputBox.propTypes = {
    boxes: PropTypes.number.isRequired,
};