import { Link } from "expo-router";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignInScreen() {
    return (
        <View className="flex-1 items-center justify-center p-4 gap-10">
            {/* 소개 문구 영역 */}
            <View className="items-center justify-center gap-2">
                <Text className="text-white text-2xl font-semibold">안녕하세요 👋🏻</Text>
                <View className="items-center justify-center">
                    <View className="flex-row items-center gap-1">
                        <Text className="text-white text-xl font-semibold">Thread</Text>
                        <Text className="text-neutral-400 mt-1">에 방문해주셔서 감사합니다.</Text>
                    </View>
                    <Text className="text-neutral-400">서비스를 이용하라면 로그인을 진행해주세요.</Text>
                </View>
            </View>
            {/* 로그인 폼 */}
            <View className="w-full gap-6">
                <View className="w-full justify-start">
                    <Text className="text-white text-xl font-semibold">로그인</Text>
                    <Text className="text-neutral-400">로그인을 위한 정보를 입력해주세요.</Text>
                </View>
                <View className="gap-4">
                    <View className="gap-2">
                        <Text className="text-white">이메일</Text>
                        <TextInput placeholder="이메일을 입력하세요." placeholderTextColor="#a3a3a3" className="w-full py-3 px-4 border border-neutral-700 rounded-lg bg-neutral-900 text-white" keyboardType="email-address" />
                    </View>
                    <View className="gap-2">
                        <Text className="text-white">비밀번호</Text>
                        <TextInput placeholder="비밀번호를 입력하세요." placeholderTextColor="#a3a3a3" className="w-full py-3 px-4 border border-neutral-700 rounded-lg bg-neutral-900 text-white" keyboardType="email-address" />
                    </View>
                </View>
                <View className="gap-4">
                    <TouchableOpacity activeOpacity={0.8} className="w-full py-3 border border-sky-900 bg-sky-700 rounded-lg">
                        <Text className="text-center text-white font-semibold">로그인</Text>
                    </TouchableOpacity>
                    <View className="flex-row items-center justify-center gap-2">
                        <Text className="text-center text-white">계정이 없으신가요?</Text>
                        <Link href="/sign-up" asChild>
                            <Pressable>
                                <Text className="text-sky-500 font-semibold underline">회원가입</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}
