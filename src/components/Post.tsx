import { Heart, MessageCircle, RefreshCcw, SendHorizonal } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function Post() {
    return (
        <View className="flex-row items-start gap-2 p-4 border-b border-neutral-900">
            {/* 프로필 이미지 */}
            <View className="w-12 h-12">
                <Image source={{ uri: "https://github.com/9diin.png" }} className="w-12 h-12 rounded-full" />
            </View>
            {/* 포스트 콘텐츠 */}
            <View className="flex-1 flex-col gap-2">
                <View className="flex-row items-center gap-1">
                    <Text className="text-white font-semibold">구디사는 개발자 9Diin</Text>
                    <Text className="text-neutral-400">&middot;</Text>
                    <Text className="text-neutral-400">14시간</Text>
                </View>
                <Text className="text-white">한컴 AI 아카데미 2기 - HTML, CSS, JS, TS, React, RN 강의 수행 중입니다. 올바른 지식을 전달할 수 있도록 최선을 다하도록 하겠습니다.</Text>
                <View className="flex-row gap-6 mt-2">
                    <Pressable className="flex-row items-center gap-1">
                        <Heart size={16} color="#a3a3a3" />
                        <Text className="text-neutral-400">145</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center gap-1">
                        <MessageCircle size={16} color="#a3a3a3" />
                        <Text className="text-neutral-400">11</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center gap-1">
                        <RefreshCcw size={16} color="#a3a3a3" />
                        <Text className="text-neutral-400">2</Text>
                    </Pressable>
                    <Pressable className="flex-row items-center gap-1">
                        <SendHorizonal size={16} color="#a3a3a3" />
                        <Text className="text-neutral-400">100</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
