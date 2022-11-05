import React, {Component } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native"

class NavigationButton extends Component {
    render() {
        return (
            <Button
                tintColor={this.props.tintColor}
                title={this.props.title}
                onPress={this.props.onPress}
                //image={this.props.image}
            />
        );        
    }
}

export default NavigationButton