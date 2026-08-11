var course = ["HTML", "CSS", "JavaScript"]

console.log(course)

var template = "JavaScript"

var element = course.find((item) => item == template)

var index = course.findIndex((item) => item == template)

if (element) {
    console.log(index)
}
else {
    course.push(template)
    console.log(course)
}