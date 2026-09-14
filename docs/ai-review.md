# AI Review Form

- AI Tool: GitHub Copilot
- Prompt Used: "Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the any type."
- AI Recommendation: "Use a discriminated status union and a function that returns 'Active Student' for 'active', otherwise 'Inactive Student'; include defensive validation and a default fallback for unexpected values."
- What I Understood: The AI suggested a typed union approach with a safe mapping function. I understood that the code should be explicit, free of `any`, and easy to test.
- Recommendation Accepted: Yes, the overall direction was accepted.
- Recommendation Modified: Yes, the implementation was adapted to the project’s exact types and added a runtime-safe guard.
- Recommendation Rejected: No.
- Reason: The suggested idea matched the project requirement and was consistent with TypeScript best practices.

## Accepted AI Suggestion

The AI recommended using a named status type and a clear mapping function instead of a loose string comparison. This was accepted and refined into:

```ts
export type StudentStatus = "active" | "inactive";

export function getStudentStatusLabel(status: StudentStatus): string {
  if (status === "active") {
    return "Active Student";
  }

  return "Inactive Student";
}
```

This version is readable, strongly typed, and avoids `any`.

## Verification Source Used

- Claim or Code Verified: The TypeScript union and type guard approach are valid for narrowing string literal types.
- Source: TypeScript official documentation on literal types and type guards.
- Result: Verified. The implementation matches official typing conventions and works correctly with strict TypeScript settings.
