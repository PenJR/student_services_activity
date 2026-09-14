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
export declare function formatStudent(student: Student): string;
export declare function getStudentStatusLabel(status: StudentStatus): string;
export declare function isStudent(value: unknown): value is Student;
