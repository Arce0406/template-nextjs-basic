import { getCurrentUser } from "@/lib/sessions"
import UserNavContent from "./user-meun";
import UserLogInButton from "./user-log-in";

export default async function UserNav() {
    const user = await getCurrentUser();

    if (user?.name) {
        return <UserNavContent username={user.name} email={user.email} avatar_image={user.image}></UserNavContent>
    }
    return <UserLogInButton></UserLogInButton>
}
