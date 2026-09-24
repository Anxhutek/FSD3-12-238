// we use in memory database
let users=[
    {id:1,name:'amit sharma',mod:"91xxxxxxx",email:"anxxxxx@gmail.com"},
    {id:2,name:'monkshara',mod:"561xxxxxxx",email:"sbuwxxxxx@gmail.com"},
];

let nextId = 3;
export const getUsers = () => users;

export const addUser= (user) =>{
    user.id=nextId++;
    users.push(user);
    return user;
};