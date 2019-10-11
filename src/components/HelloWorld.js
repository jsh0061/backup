import React, {Component} from "react"; // 없으면 react인지 인식을 못함

import { View, Text } from "react-native";

// Hello World 라는 이름의 클래스 컴포넌트를 export
export default class HelloWorld extends Component { //반드시 component를 상속 받아야 됨
    // render함수가 반드시 있어야함.
    render() {
        return (
            <View>
                <Text style = {{color:"blue", fontSize:30}}>HelloWorld</Text>
            </View>
        );
    }
}