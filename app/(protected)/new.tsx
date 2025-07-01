import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPostScreen() {
    const [text, setText] = useState("");

    return (
        <SafeAreaView className="p-4 flex-1">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 128 : 0} // iOS는 보통 64~100 사이 설정
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                    <View className="py-4 flex-1">
                        <Text className="text-white text-lg font-semibold">구디사는 개발자 9Diin</Text>
                        <TextInput value={text} onChangeText={setText} placeholder="새로운 소식이 있나요?" placeholderTextColor="#a3a3a3" className="text-white" multiline numberOfLines={4} style={{ minHeight: 120, textAlignVertical: "top" }} />
                        <View className="flex-row items-center justify-between mt-auto pt-4">
                            <Text className="text-neutral-400">누구에게나 답글 및 인용 허용</Text>
                            <Pressable onPress={() => console.log("post: ", text)} className="bg-white py-3 px-5 rounded-full self-end">
                                <Text className="text-black font-semibold">게시</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
