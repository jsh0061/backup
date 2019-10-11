import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";

let addressBook = [
    {
        name: "영수",
        phone: "010-4650-5822",
        key: "1"
    },
    {
        name: "윤수",
        phone: "010-1234-3421",
        key: "2"
    },
    {
        name: "영희",
        phone: "010-5723-8231",
        key: "3"
    }
];
export default class FlatListAdvanced extends Component {
    constructor(props) {
        super(props);
        this.state = { searchtext: "" };
    } // state 초기화
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: 52,
                    width: "100%"
                }}
            >
                <TextInput style={{
                    height: 40,
                    borderWidth: 1,
                    width: "100%"
                }}
                    placeholder="검색어를 입력해주세요."
                    onChangeText={text => this.setState({ text })}

                    value={this.state.text}

                />

                <FlatList
                    data={addressBook}
                    renderItem={({ item, index }) => {
                        if (this.state.text == item.name) {
                            return (
                                <TouchableOpacity onPress={this.props.onPress}>
                                    <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 20 }}>{item.phone}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                    }
                    ItemSeparatorComponent={item => {
                        return <View style={{ borderWidth: 1 }}></View>;
                    }}
                    keyExtractor={(item, index) => {
                        return String(index);
                    }}}
                />

            </View>

        );

    } eles{
    retrun(
        <View></View>
    )


}
}