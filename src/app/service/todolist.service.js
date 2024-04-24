//Get All todolist

import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";

export const getAllTodoListService = async() =>{

    //get token from cookie
    const token = getServerSession (authOption);
    console.log("token is :", token?.user?.token)

    const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces');
    const data = await res.json();
    return data;
}
