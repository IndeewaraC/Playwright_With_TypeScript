interface SignUpDetails {
    name: string;
    username: string;
    password: string;
};

export const loginData : SignUpDetails[] = [
    {
        name: "Correct Details", 
        username: "testuser@example.com", 
        password: "TestPassword123!"
    },
    {
        name: "Incorrect Details", 
        username: "wrong@example.com", 
        password: "wrongpassword"
    },
    {
        name: "Invalid Details", 
        username: "invalid", 
        password: "invalidpassword"
    }
]