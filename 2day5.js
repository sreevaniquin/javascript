//console.log(name);

/*const a={
    firstName:"java script",
    lastName:"programming",
    role:"Admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        his role is ${this.role}
        and he is studying ${this.courseCount} courses`);
    }
    };
    const dj={
        firstName:"Rock",
        lastName:"DJ",
        role:"Sub-admin",
        courseCount:4,
    };
    //a.getInfo.bind(dj)();//getinfo method will be for dj(way 1)
     var djinfo=a.getInfo.bind(dj);//only this line will not give the output as bind always gives a reference
     djinfo(); *///getinfo method will be for dj(way 2)