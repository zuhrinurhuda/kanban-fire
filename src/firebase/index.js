import { initializeApp } from 'firebase'

const firebase = initializeApp({
  databaseURL: 'https://kanbanfire.firebaseio.com',
  projectId: 'kanbanfire'
})

const tasksRef = firebase.database().ref('tasks')

export { firebase, tasksRef }
