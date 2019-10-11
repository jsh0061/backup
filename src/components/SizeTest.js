import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SizeText extends Component {
    render() {
        return (
            <View>
                <View style={{ width: 50, height: 50, backgroundColor: "blue" }}><Text>50X50</Text></View>
                <View style={style.box2}><Text style={{ color: "white" }}>100X100</Text></View>
                <View style={{ width: 150, height: 150, backgroundColor: "red" }}><Text>150X150</Text></View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    box2: {
        width: 100,
        height: 100,
        backgroundColor: "black"
    }
});