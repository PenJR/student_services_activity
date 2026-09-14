# Pull Request: Add student-status formatter

## Summary

This Pull Request adds a typed helper that converts a student's status into a readable label and includes runtime validation examples for the student model.

## What Changed

- Added the `StudentStatus` union type.
- Implemented `getStudentStatusLabel()` to map `active` and `inactive` to readable labels.
- Kept the implementation type-safe and free of `any`.
- Added runtime validation for external `unknown` data using `isStudent()`.
- Updated the project documentation and workflow files.

## Testing Performed

- `npx tsc --noEmit`
- `npx eslint .`
- `npx prettier --check .`

## AI Usage

AI tools were used to propose a status-label strategy, but the final implementation was reviewed, refactored, and verified before being accepted.

## Known Limitations

- This is a starter project and not yet a full user-facing portal.
- Validation is focused on the student data model rather than a complete API layer.

## Related Issue

- Issue: Add student-status formatter

## Reviewer Notes

- The implementation should remain strongly typed.
- Runtime checks should continue to validate untrusted input.
- This PR is intended to establish a clean branch-based workflow for future development.
