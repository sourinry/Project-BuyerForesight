let users = [];
let id = 1;

//get all users
export const getAll = async () => users;

//get user by user id
export const getById = async (userId) => users.find(u => u.id == userId);

//create a user 
export const create = async (data) => {
    const user = {id: id++, ...data};
    users.push(user);
    return user;
};

//update user 
export const update = async (userId, data) =>{
    const index = users.findIndex(u => u.id == userId);
    if(index === -1) return null;

    users[index] = {...users[index], ...data};
    return users[index];    
};

//delete user
export const deleteUser = async (userId) => {
  const index = users.findIndex(u => u.id == userId);
  if (index === -1) return null;

  return users.splice(index, 1);
};