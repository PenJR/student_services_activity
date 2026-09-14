export function formatStudent(student) {
    return `${student.id} - ${student.name} (${student.status})`;
}
export function getStudentStatusLabel(status) {
    if (status === "active") {
        return "Active Student";
    }
    return "Inactive Student";
}
export function isStudent(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const candidate = value;
    return (typeof candidate.id === "number" &&
        typeof candidate.name === "string" &&
        typeof candidate.email === "string" &&
        (candidate.status === "active" || candidate.status === "inactive"));
}
const student = {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    status: "active",
};
const studentResponse = {
    success: true,
    data: student,
};
const studentsResponse = {
    success: true,
    data: [student],
};
const validStudent = {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    status: "active",
};
const invalidIdStudent = {
    id: "2",
    name: "Maria Santos",
    email: "maria@example.com",
    status: "active",
};
const missingNameStudent = {
    id: 3,
    email: "student@example.com",
    status: "inactive",
};
console.log(formatStudent(student));
console.log(getStudentStatusLabel(student.status));
console.log("Valid student:", isStudent(validStudent));
console.log("Invalid ID:", isStudent(invalidIdStudent));
console.log("Missing name:", isStudent(missingNameStudent));
console.log("API response:", studentResponse);
console.log("Student list response:", studentsResponse);
//# sourceMappingURL=index.js.map