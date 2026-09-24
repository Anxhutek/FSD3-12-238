import http from 'http';
import {getALLUsers,updateUser,getUserById,addUser,deleteUser } from './users.js';

const server = http.createServer((req, res) => {
    if(req.url === '/api/users'&& req.method == 'GET') {
        res.end(JSON.stringify(getALLUsers()));
    }
    else if(req.url === '/api/users'&& req.method == 'POST') {
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        });
        req.on('end',()=>{
            const user= JSON.parse(body);
            const userCreated = addUser(user);
            res.end(JSON.stringify ({msg:"user added", userCreated}));
        }
        );
    }
    else if(req.url.startsWith(" /api/users")&& req.method === 'GET') {
        const userId = Number(req.url.split('/').pop());
        const user = getUserById(userId);
        if((!userfound)) {
            res.end(JSON.stringify({ msg: `user not found` }));
        } else {
            res.end(JSON.stringify({ msg: `user found` }));
        }
    }
    else if(req.url === '/api/users/1'&& req.method === 'PUT') {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const updatedUser = JSON.parse(body);
            const userUpdated = updateUser(userId, user);
            if (!userUpdated) {
                res.end(JSON.stringify({ msg: "user not found" }));
            } else {
                res.end(JSON.stringify({ msg: "user updated", userUpdated }));
            }
            res.end(JSON.stringify({ msg: "user updated", user }));
        });
    }
    else if(req.url === '/api/users/1'&& req.method === 'DELETE') {
        const deleted = deleteUser(1);
        res.end(JSON.stringify({ msg: "user deleted", deleted }));
    } else {
        // res.statusCode = 404;
        res.end()
    }
});

server.listen(2000, () => {
    console.log("Server is running on port 2000");
});