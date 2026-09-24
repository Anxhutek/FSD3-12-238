// we use in memory database
let users=[
    {id:1,name:'amit sharma',mod:"91xxxxxxx",email:"anxxxxx@gmail.com"},
    {id:2,name:'monkshara',mod:"561xxxxxxx",email:"sbuwxxxxx@gmail.com"},
];

let nextId = 3;

export const getALLUsers = () => {
    return users;
}

export const getUserById = (pid) => {
    const found = users.find((user) => user.id === pid);
    return found;
}

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};

export const updateUser = (pid, updatedData) => {
    const index= users.findIndex((user) => user.id === pid);
    if(index == -1) {
        return false;
    }
    updatedData.id= pid;
    users[index]= updatedData;
    return updatedData;
};

export const deleteUser = (pid) => {
    const index = users.findIndex((user)=> user.id === pid);
    if(index == -1) {
        return false;
    }   
    users.splice(index,1);
    return true;
};