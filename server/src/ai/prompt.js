const buildPlannerPrompt = ({ recurring, tasks }) => {
    return `
You are an expert daily planner.

Recurring Events:
${JSON.stringify(recurring)}

Pending Tasks:
${JSON.stringify(tasks)}

Generate an optimized schedule.

Rules:

1. Never overlap events.
2. Never move recurring events.
3. Place tasks only in free slots.
4. Finish higher priority tasks first.
5. Keep realistic timings.
6. Return ONLY valid JSON.
7. No markdown.
8. No explanations.
9. The response must begin with { and end with }.

Return exactly:

{
  "events":[
    {
      "title":"DSA",
      "startTime":"13:00",
      "endTime":"15:00",
      "category":"study",
      "source":"task"
    }
  ]
}
`;
};

module.exports = {
    buildPlannerPrompt,
};