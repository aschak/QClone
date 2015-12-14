# Seek.


## Minimum Viable Product

Seek is a web application influenced by Quora built using Ruby
on Rails in tangent with React.js. Users on Seek are able to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete questions
- [ ] Create, read, edit, and delete answers to questions
- [ ] Tag questions with multiple tags, view questions by tag
- [ ] Upvote questions, view questions sorted by upvotes
- [ ] Search for questions by question title

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Question Model and JSON API (1.5 days)

<!-- In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Notes. -->

In Phase 1, I will first establish user signup and authentication functionality
using BCrypt. Upon signing in, users will be redirected to a page that will contain
the SeekIndex root React component. I will also implement a JSON API for all models,
but will begin with the Question Model.

[Details][phase-one]

### Phase 2: Flux Architecture and Question CRUD (2.5 days)

In Phase 2, the Flux architecture, React Router, and React view layout for
Seek will be constructed. When this architecture is functioning, a Question
store will be created alongside all corresponding actions needed to
establish CRUD functionality. React views will be created for the
`QuestionsIndex`, `QuestionsIndexItem`, and `QuestionForm`. Users can create,
read, edit, and destroy Questions. Basic styling using bootstrap will
begin when these views are created.


[Details][phase-two]

### Phase 3: Add Answers to Questions (1.5 days)

Phase 3 adds another level of React components to the hierarchy. Users
can now reply with Answers to Questions posted by other Users.
The author of a Question will not be able to answer their own Question.
Users may also post Comments on Answers, including the author of the
original question. Once Question title can be posted, I will begin
constructing the basic search bar component.

[Details][phase-three]

### Phase 4: Add Tags to Questions (1 days)

In phase 4, a Tag component can be added that will attach to a question.
When a User is signed in, they can view all their preferred Tags and their
feed will only contain Questions which contain those Tags.

[Details][phase-four]

### Phase 5: Search Bar + Nav (1 day)

Phase 5 will focus on fleshing out and improving the Search Bar alongside
the full nav bar on the top of the page. This will include styling and
implementing fuzzy search functionality for Questions by title. The
Textacular Ruby Gem fuzzy search will be used to achieve this.

[Details][phase-five]

### Phase 6: Users Profile Page (1 day)

Phase 6 will improve the existing User show page. Users will be able to
update their description and profile pictures. Users will be able to
view all Questions and Answers they have posted.

[Details][phase-six]

### Phase 7: Styling Finishes, Seeding, General Cleanup (1 day)
  Styling will be implemented site wide, primarily with Bootstrap. Additional
  styles such as CSS transitions and other adornments will be added. Limited
  seed data will have been used up this point for testing but now a fuller
  set of data will be added to give a better look/feel to the application.

### Bonus Features (TBD)
- [ ] Use javascript library for cleaner tag selection
- [ ] Display most popular tags
- [ ] Add User Notifications (Question answered, Comment on Answer)
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Questions Index
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: .docs/phases/phase6.md
