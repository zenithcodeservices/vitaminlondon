## Getting Started

First, run the development server:

```bash
yarn
yarn next
```

## Functionality
- Users can select a box to autofill the HTML form below
- Users can right click on an event to delete the event

## Known issues
- When running localhost:3000 in VSCode debugging, I can see that the array is iterating through times and popularing each row/column intersection with times.len() arrays. This is an issue and also explains the bugs noted below. However, as per the github readme.md in the task description, I have only spent a couple of hours on the task to get an MVP together.
- When deleting an event, it deletes the events in the same row and column
- Styling doesn't adjust width for multiple events on same day and time