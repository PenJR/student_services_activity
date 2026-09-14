export type StudentStatus = "active" | "inactive";

export interface Student {
  id: number;
  name: string;
  email: string;
  status: StudentStatus;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

export function getStudentStatusLabel(status: StudentStatus): string {
  if (status === "active") {
    return "Active Student";
  }

  return "Inactive Student";
}

export function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string" &&
    typeof candidate.email === "string" &&
    (candidate.status === "active" || candidate.status === "inactive")
  );
}

const student: Student = {
  id: 1,
  name: "Juan Dela Cruz",
  email: "juan@example.com",
  status: "active",
};

const studentResponse: ApiResponse<Student> = {
  success: true,
  data: student,
};

const studentsResponse: ApiResponse<Student[]> = {
  success: true,
  data: [student],
};

const validStudent: unknown = {
  id: 2,
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};

const invalidIdStudent: unknown = {
  id: "2",
  name: "Maria Santos",
  email: "maria@example.com",
  status: "active",
};

const missingNameStudent: unknown = {
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
