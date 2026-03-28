import { use } from "react"
import UserLi from "./UserLi";

export default function UserList({userPromise}) {
    const users = use(userPromise);
    console.log(users);
    return (
        <div className="card">
            <h2>All users are here: {users.length}</h2>
            {
                users.map(user => <UserLi key={user.id} user={user}></UserLi>)
            }
        </div>
    )
}
