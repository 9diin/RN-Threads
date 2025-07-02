import Post from "@/src/components/Post";
import { Link } from "expo-router";
import { FlatList } from "react-native";

const dummyPosts = [
    {
        username: "구디사는 개발자 9Diin",
        content: "한컴 AI 아카데미 2기 - HTML, CSS, JS, TS, React, RN 강의 수행 중입니다. 올바른 지식을 전달할 수 있도록 최선을 다하도록 하겠습니다.",
    },
    {
        username: "구디사는 개발자 9Diin",
        content: "한컴 AI 아카데미 2기 - HTML, CSS, JS, TS, React, RN 강의 수행 중입니다. 올바른 지식을 전달할 수 있도록 최선을 다하도록 하겠습니다.",
    },
    {
        username: "구디사는 개발자 9Diin",
        content: "한컴 AI 아카데미 2기 - HTML, CSS, JS, TS, React, RN 강의 수행 중입니다. 올바른 지식을 전달할 수 있도록 최선을 다하도록 하겠습니다.",
    },
    {
        username: "구디사는 개발자 9Diin",
        content: "한컴 AI 아카데미 2기 - HTML, CSS, JS, TS, React, RN 강의 수행 중입니다. 올바른 지식을 전달할 수 있도록 최선을 다하도록 하겠습니다.",
    },
];

export default function HomeScreen() {
    return (
        <FlatList
            data={dummyPosts}
            renderItem={() => <Post />}
            ListHeaderComponent={() => (
                <>
                    <Link href={"/new"} className="text-blue-500 text-center text-3xl p-4">
                        New Post
                    </Link>
                    <Link href={"/sign-in"} className="text-blue-500 text-center text-3xl p-4">
                        로그인
                    </Link>
                    <Link href={"/sign-up"} className="text-blue-500 text-center text-3xl p-4">
                        회원가입
                    </Link>
                </>
            )}
        />
    );
}
