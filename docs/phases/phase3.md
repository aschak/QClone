# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Answer
* Comment

### Controllers
* Api::AnswersController (create, destroy, edit, index)
* Api::CommentsController (create, destroy, edit, index)

### Views
* answers/index.json.jbuilder
* comments/index.json.jbuilder

## Flux
### Views (React Components)
* AnswersIndex
* AnswerForm
* CommentIndex
* CommentForm

### Stores
* Answer
* Comment

### Actions
* ApiActions.receiveAllAnswers
* ApiActions.createAnswer
* ApiActions.deleteAnswer
* ApiActions.receiveAllComments
* ApiActions.createComments
* ApiActinos.deleteComments

### ApiUtil
* ApiUtil.fetchAllAnswers
* ApiUtil.createAnswer
* ApiUtil.destroyAnswer
* ApiUtil.editAnswer
* ApiUtil.fetchAllComments
* ApiUtil.createComment
* ApiUtil.destroyComment
* ApiUtil.editComment

## Gems/Libraries
