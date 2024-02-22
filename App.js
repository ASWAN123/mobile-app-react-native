import {
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

export default function App() {
    return (
        <View className="border h-[100px] mt-8 w-full ">
            <Text className="text-blue-600">Hi there,</Text>
            <TextInput className="border border-red-400 "></TextInput>
            <Button
                // onPress={onPressLearnMore}
                title="click me"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

            <TouchableHighlight>
                <View>
                    <Text>Touch Here</Text>
                </View>
            </TouchableHighlight>


            <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
        </View>
    );
}
