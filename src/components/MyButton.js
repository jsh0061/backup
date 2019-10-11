import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from "react-native";


export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{ backgroundColor: "red" }}>
                    <Text style={{ fontSize: 30, color: "#fff", padding: 10 }}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}