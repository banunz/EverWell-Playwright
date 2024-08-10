const environment={
    dev:{
        baseUrl:"https://dev.website.co.nz",
    loginDomain: "login.dev.website.co.nz",
    user:{
        userName: "test1",
        password: "test1234"
    },
    user2:{
        userName: "test2",
        Password: "test123"
    }
    },
    test:{
        baseUrl:"https://test.website.co.nz",
    loginDomain: "login.test.website.co.nz",
    user:{
        userName: "test1",
        password: "test1234"
    },
    user2:{
        userName: "test2",
        Password: "test123"
    }
    }
}

const selectedEnvironment=process.env.ENV || 'dev';
export default environment[selectedEnvironment];