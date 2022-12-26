import { useState } from 'react'

function Profile() {
    const [loggedIn, setloggedIn] = useState(1)
    //1,2,3  used in ternarry operator one liner
    return (
        <div>
            {loggedIn == 1 ?
                <h1>Welcome User 1</h1>
                : loggedIn == 2 ? <h1>Welcome User 2</h1>
                    : <h1>Welcome User 3</h1>}
        </div>
    )

}

export default Profile;