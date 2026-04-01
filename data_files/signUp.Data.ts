interface SignUpDetails {
    title: string;
    name: string;
    email: string;
    expectedToPass: boolean;
};

export const signUpData: SignUpDetails[] = [{
    title: "Valid Name and Email",
    name: "Test User_01",
    email: `TestUser_01${Date.now()}@gmail.com`,
    expectedToPass: true
},
{
    title: "Number Only name and Valid Email",
    name: "12345",
    email: `12345${Date.now()}@gmail.com`,
    expectedToPass: true
},
{
    title: "Symbol Only name and Valid Email",
    name: "!@#$%",
    email: `symbol${Date.now()}@gmail.com`,
    expectedToPass: true
},
{
    title: "Empty Name and Valid Email",
    name: "",
    email: `valid${Date.now()}@gmail.com`,
    expectedToPass: false
},
{
    title: "Empty Email and Valid Name",
    name: "Test User_ 02",
    email: "",
    expectedToPass: false
},
{
    title: "Invalid Email Format_without @ symbol",
    name: "Test User_03",
    email: "invalidemailgmail.com",
    expectedToPass: false
},
{
    title: "Invalid Email Format_without dotcom",
    name: "Test User_04",
    email: "invalidemail@gmailcom",
    expectedToPass: false
},
{
    title: "Invalid Email Format_withoutdotcom",
    name: "Test User_05",
    email: "invalidemailgmail",
    expectedToPass: false
},
{
    title: "Invalid Email Format_with spaces",
    name: "Test User_06",
    email: "invalid email@gmail.com",
    expectedToPass: false
}
];