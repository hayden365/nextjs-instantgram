import { HomeUser, ProfileUser } from "@/model/user";
import React from "react";
import useSWR from "swr";

type Props = {
	user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
	const { data: loggedInUser } = useSWR<HomeUser>("/api/me");
	const showButton = loggedInUser && loggedInUser.username;
	return <p>FollowButton</p>;
}
