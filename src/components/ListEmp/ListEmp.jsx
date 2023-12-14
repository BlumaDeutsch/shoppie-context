import { useContext, useState } from "react";
import ItemEmp from "../ItemEmp/ItemEmp";
import usersContext from "../../context/users";

export default function ListEmp() {
    const { users } = useContext(usersContext);




    return (
        <>
            <h1>Users list</h1>
            <div className='row'>
                {users?.map((user) => {
                    return <ItemEmp
                        user={user}
                        key={user.id.value}
                    />
                })}

            </div>

        </>
    );
}