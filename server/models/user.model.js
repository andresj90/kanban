module.exports = mongoose => {
  const User = mongoose.model(
      'user', 
      mongoose.Schema(UserSchema,  { timestamps: true })
      )  
  return User;    
} 

const UserSchema = {
    name : {
        type: 'string',
        require:true
    },
    last_name : {
        type: 'string',
        require:true
    },  
    role : {
        type: 'string',
        require:true,
        enum: ['admin', 'agent', 'visitor']
    }, 
    username : {
        type: 'string',
        require:true
    },
    password : {
        type: 'string',
        require:true
    },
    email : {
        type: 'string',
        require:true
    },
    task: {
        todo: [], 
        inProgress: [], 
        done:[], 
        require:false
    }  
}