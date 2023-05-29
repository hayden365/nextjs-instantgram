import { resolve } from "path";
import { client } from "./sanity";

type OAuthUser = {
	id: string;
	email?: string | null;
	name?: string | null;
	username: string;
	image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
	//존재하지 않으면 생성해줘
	return client.createIfNotExists({
		_id: id,
		_type: "user",
		username,
		email,
		name,
		image,
		following: [],
		followers: [],
		bookmarks: [],
	});
}

export async function getUserByUsername(username: string) {
	return client.fetch(
		`*[_type == 'user' && username =="${username}"][0]{
      ...,
      "id":_id,
      following[]->{username, image},
      followers[]->{username, image},
      "bookmarks":bookmarks[]->_id
    }`,
	);
}
