# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Adding custom id property/field in table and code

**Description:** A custom id field will need to be added to the Agents table which will enable facilities to save their own custom ids for agents they work with. 

**Acceptance criteria:**

1. A custom id field should be present in the Agent table in the database. 
2. A custom id field should be present in the Shifts table where the agent metadata is stored. 

**Implementation details:**

1. Create new column in Agent table for the custom id field. 
2. Update the Shifts table to include the agent's custom id field. 
3. Include the custom id field in the code that generates and updates new Agents.

**Time/effort estimate:** 3 hours


### Ticket 2: Modify the `getShiftsByFacility` function to return the custom id field

**Description:** The `getShiftsByFacility` function will need to be modified to return the custom id field for each agent.

**Acceptance criteria:**

1. The Shifts that are returned by the `getShiftsByFacility` function should contain the custom id in the agent metadata.

**Implementation details:**

1. Modify the query used in `getShiftsByFacility` to include the custom id field in the agent metadata.
2. Modify the code that translates the query results into Shift objects to include the custom id field.

**Time/effort estimate:** 2 hours


### Ticket 3: Modify the `generateReport` function to use the custom id field

**Description:** The `generateReport` function will need to be modified to use the custom id field when generating reports.

**Acceptance criteria:**

1. The `generateReport` function should use the custom id field when generating reports.
2. If custom id field is not present, the function should use the internal database id when generating reports.

**Implementation details:**

1. Modify the `generateReport` function to use the custom id field when generating reports.

**Time/effort estimate:** 1 hour


### Ticket 4: Add input fields in the User Interface to allow users to enter custom id fields

**Description:** The UI will need to be modified to allow users to enter custom id fields for agents. 

**Acceptance criteria:** 

1. The UI should have input fields for users to enter custom id fields for agents.
2. The input field should validate that the custom id field is a string of length 1-10 characters.
3. The input field should validate that the custom id field is unique for each agent.
4. The field should be optional and not required.

**Implementation details:**

1. Add input fields to the UI for users to enter custom id fields for agents.
2. Add validation to the input fields to ensure that the custom id field is a string of length 1-10 characters.
3. Add validation to the input fields to ensure that the custom id field is unique for each agent.

**Time/effort estimate:** 3 hours