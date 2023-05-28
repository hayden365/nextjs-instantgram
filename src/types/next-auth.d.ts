import { User } from "@/model/user";
import NextAuth from "next-auth";

declare module "next-auth" {
	interface Session {
		user: User;
	}
}
