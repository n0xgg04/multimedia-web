export const ACCOUNT_TYPE = {
    STUDENT: "STUDENT",
    ORGANIZATION: "ORGANIZATION",
    TEACHER: "TEACHER",
    ADMIN: "ADMIN"
} as const;
export type ACCOUNT_TYPE = (typeof ACCOUNT_TYPE)[keyof typeof ACCOUNT_TYPE];
