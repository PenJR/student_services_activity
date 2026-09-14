# Laboratory Reflection

1. What was the most important difference between your previous programming workflow and the Git/GitHub workflow used in this laboratory?
   The biggest difference was moving from a single local file-editing workflow to a tracked, reviewable, branch-based process. Git and GitHub introduced version control, accountability, collaboration, and safer feature development.

2. Why was the feature branch useful?
   A feature branch isolates new work from the main codebase. This reduces the risk of breaking shared code and makes review and testing easier before the change is merged.

3. Did the AI provide any suggestion that required modification? Explain.
   The AI recommended a simple mapping strategy, which was mostly correct. It needed slight adaptation to fit the project’s exact StudentStatus type and to ensure the implementation remained clear and testable.

4. How did TypeScript help detect or prevent a possible problem?
   TypeScript prevented invalid values from being passed into the student status and student model definitions. It helped enforce structure and catch mismatched types during development before runtime.

5. Why was runtime validation still necessary?
   TypeScript only checks code at compile time. External API data or user input can still be malformed at runtime, so a runtime guard was necessary to confirm the object actually matches the expected structure.

6. What information should never be placed in the repository?
   Secrets such as API keys, tokens, passwords, private environment variables, and credentials should never be committed to the repository.

7. Which step of: Ask → Understand → Review → Modify → Test → Verify → Commit was the most important to you? Explain your answer.
   The most important step was Verify. Without verifying the AI suggestion, the TypeScript types, and the runtime behavior, a change could look correct but still fail in real use.

8. How could this workflow improve a group software-development project?
   This workflow creates a clear structure for collaboration, review, and accountability. It helps teams integrate features safely, maintain readable history, and reduce confusion during development.
