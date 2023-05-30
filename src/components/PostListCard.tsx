import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

type Props = {
	post: SimplePost;
};

export default function PostListCard({ post }: Props) {
	const { userImage, username, image, createdAt, likes, text } = post;
	return (
		<article className="rounded-lg shadow-md border border-gray-200">
			<div className="flex items-center p-2">
				<Avatar image={userImage} size="medium" highlight />
				<span className="text-gray-900 font-bold ml-2">{username}</span>
			</div>
			<Image
				className="w-full object-cover aspect-square"
				src={image}
				alt={`photo by ${username}`}
				width={500}
				height={500}
			/>
			<ActionBar
				likes={likes}
				username={username}
				text={text}
				createdAt={createdAt}
			/>
			<CommentForm />
		</article>
	);
}