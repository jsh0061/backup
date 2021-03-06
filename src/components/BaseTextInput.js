import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class BaseTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }

    render() {
        return (
            <View style={{ padding: 10, width: "80%" }}>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: "gray",
                        borderWidth: 1,
                        width: "100%"
                    }}
                    placeholder="입력해주세요."
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                />
                <Text style={{ padding: 10, fontSize: 22, width: "100%" }}>
                    입력된 글: {this.state.text}
                </Text>
            </View>
        );
    }
}
