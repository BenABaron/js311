Making our Todo list backend

1. add an item to the todo list

2. edit an item on the todo list by ID
  a. mark it as completed
  b. change the notes
  c. change urgency

3. delete an item on the todo list by ID

4. see all items
  a. see only not done items
  b. see only the urgent items

5. get an item by ID


REST Endpoints
1. what is the rest endpoint resourse look like?
2. what verb will we use?
3. what input or data is being sent along with our request?
4. what are the results coming back on the response?

BASE: https://awesomeapp.com/api/vi

This is to create an item
POST /todo
DATA: {
  name: "Do Laundry",
  done: false,
  description: null
  urgent: false
}

RESPONSE: {
  id: 1,
  name: "Do Laundry",
  done: false,
  description: null
  urgent: false
}

This is to delete an item
{id}: replaced with the id of the item you want to delete
DELETE /todo/{id}
DATA: none - delete verb does not usually support or include post data

RESPONSE: nothing,
    or    the id of the item deleted
    or    the entire object that was deleted

This is to get an item
GET /todo/{id}
RESPONSE: {
  id: 1,
  name: "Do Laundry",
  done: false,
  description: null
  urgent: false
}

This is to list all the items
GET /todo
RESPONSE: [ {
  id: 1,
  name: "Do Laundry",
  done: false,
  description: null
  urgent: false
}, {
  id: 2,
  name: "Walk the fish",
  done: false,
  description: null
  urgent: false
}, {
  id: 3,
  name: "Bath the cat",
  done: false,
  description: null
  urgent: false
}, {
  id: 4,
  name: "Feed the birds",
  done: false,
  description: null
  urgent: false
} ]

This is to update an item
{id}: this is the id of the item to update, must match the id in the data
PUT /todo/{id} - update only the provided attributes
DATA: {
  id: 1,
  name: "Do Laundry",
  done: false,
  description: null
  urgent: false
}