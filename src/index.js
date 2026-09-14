"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatStudent(student) {
  return `${student.id} - ${student.name} (${student.status})`;
}
const student = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};
console.log(formatStudent(student));
//# sourceMappingURL=index.js.map
