// Practice Question: Create a JavaScript Object Literal to represent a social media post.
// The object should store properties like username, content, likes, reposts, and tags.

let post={
    username:"@vanshikaagrawal",
    content:"This is my #FirstPost",
    likes:150,
    repost:5,
    tags:["@apnacollege","@sigma"]
};
console.log(post);
console.log(post.username);
console.log(post.tags);
console.log(post["content"]);
console.log(post.tags[1]);

//----------------------------------
let student={
    name:"vanshika",
    age:20,
    marks:94.4,
    city:"Delhi",
};
student.city="Mumbai";
console.log(student);
//adding new key value pair
student.gender="female";
console.log(student);
//updation
student.marks=[89,90,96];
console.log(student);
//delete 
delete student.gender;
console.log(student);
