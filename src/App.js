import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
const App = () => {
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)
    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }
    const usersData = []
    const editRow = (user) => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
    const [users, setUsers] = useState(usersData)
    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const [editing, setEditing] = useState(false)

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        {editing ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserForm
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                    </div>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
    )
}

export default App
