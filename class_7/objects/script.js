// object is used to add random data in a effiecient way
// used to store key value pairs
let std_details = {
  name: "ahmed",
  age: 22,
  gender: "male",
  marks: 100,
  adress: "peshawar",
  skill: ["html", "css", "js"],
};
// to retrive data from this write object name and . with property
console.log(std_details.marks);
// to add new property we use same .with new property
std_details.rollno = 7;
console.log(std_details);
// if we want to update value same using . and property name and new value what we want
console.log((std_details.age = 20));
console.log(std_details);
// skills is array so retrive data used array property
console.log(std_details.skill[1]);
// to delete a property we use delete in start
delete std_details.rollno;
console.log(std_details);

// we can also define object inside object called nested object
let course = {
  course_id: 101,
  course_name: ["web", "database", "networking", "os"],
  // instructor is the nested object
  instructor: {
    instructor_id: 1,
    instructor_name: "ahmed",
    instructor_salary: 100000,
  },
  department: [
    {
      department_1: "cs",
      hod: "fayaz",
    },
    {
      department_2: "allied health sciences",
      hod: "daniyal",
    },
    {
      department_3: "English",
      hod: "abdul musavir",
    },
  ],
  course_duration: "3 Months",
  course_fees: 25000,
};
console.log(course);
console.log(course.course_duration);
console.log((course.course_duration = "5 Month"));
console.log(course.course_name[2]);
console.log(course.instructor.instructor_name);
console.log(course.department[1].department_2);
console.log(course.department[1].hod);
for (let i = 0; i < course.course_name.length; i++) {
  console.log(course.course_name[i]);
}
