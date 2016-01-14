# Seek

## Summary

Seek is a community platform for asking and answering questions built
with Ruby on Rails, React.js, Twitter Boostrap, and jQuery. Seek is
inspired by Quora's model of information sharing.

I wanted to simplify the interface, focusing only on the
primary function of the site: Seeking and giving answers.

-[Seek][link]
-[link]: http://seekanswers.herokuapp.com

## Main Functionality

Users on Seek are able to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete questions
- [ ] Create, read, edit, and delete answers to questions
- [ ] Tag questions with multiple tags
- [ ] Search for questions by question title

## React Router

  Building Seek has been exhilarating from start to finish, but my favorite
aspect of it was using React to achieve a single-page interface. By using
the React Router extension, I was able to allow users to quickly access
any link they click, from another User's profile page to the show page
of a Question.

    var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={SeekIndex}/>
      <Route path='question/:id' component={QuestionShow}/>
      <Route path='user/:id' component={UserProfile}/>

    </Route>
    );


    document.addEventListener("DOMContentLoaded", function () {
      var root = document.getElementById('root');

      if (root) {
        ReactDOM.render(
          <Router>{routes}</Router>,
          root
        );
      }
    });

## Tags

  Tags offered a unique challenge when building Seek. Tags need to be
attached to both Questions and Users, but a simple join table to connect
them wasn't enough. Since Users need to be able to edit which Tags are
associated with them, I created a model called ProfileTags which joins
with the User's Tags, and Taggings to join the question Tags.


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation History

### Phase 1: User Authentication, Question Model and JSON API (1.5 days)

In Phase 1, I established user signup and authentication functionality
using BCrypt. Upon signing in, users are be redirected to a page that will contain
the SeekIndex root React component. I implemented a JSON API for all models,
beginning with the Question Model.

[Details][phase-one]

### Phase 2: Flux Architecture and Question CRUD (2.5 days)

In Phase 2, the Flux architecture, React Router, and React view layout for
Seek were constructed. A Question Store was created alongside all corresponding
actions needed to establish CRUD functionality. React views were created for the
`QuestionsIndex`, `QuestionsIndexItem`, and `QuestionForm`. Users can create,
read, edit, and destroy Questions. Basic styling using bootstrap began
begin when these views were created.


[Details][phase-two]

### Phase 3: Add Answers to Questions (1.5 days)

Phase 3 adds another level of React components to the hierarchy. Users
can now reply with Answers to Questions posted by other Users.
Users may also post Comments on Answers. Basic search bar construction
began after establishing question/answer posting.

[Details][phase-three]

### Phase 4: Add Tags to Questions (1 days)

In phase 4, a Tag component can be added that will attach to a question.
When a User is signed in, they can view all their preferred Tags and their
feed will only contain Questions which contain those Tags. A distinction
between tags on a question (Taggings) and tags a user prefers (ProfileTags)
allows for easy filtering of a user's tags.

[Details][phase-four]

### Phase 5: Search Bar + Nav (1 day)

Phase 5 will focused fleshing out and improving the Search Bar alongside
the full nav bar on the top of the page. This will include styling and
implementing fuzzy search functionality for Questions by title. The
Fuse.js JavaScript library was used to achieve this.

[Details][phase-five]

### Phase 6: Users Profile Page (1 day)

Phase 6 improved the existing User show page. Users are able to
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
[Seek]: seekanswers.herokuapp.com
