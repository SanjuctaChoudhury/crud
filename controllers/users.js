import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    res.send(`User [${user.firstname}] added to the database.`);
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    res.send(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.firstname = req.body.firstname;//if else can also be used
    user.lastname = req.body.lastname;
    user.age = req.body.age;

    res.send(`username has been updated to ${req.body.firstname}.age has been updated to ${req.body.age}and lastname has been updated to ${req.body.lastname}`)
};