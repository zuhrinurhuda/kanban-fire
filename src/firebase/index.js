import { initializeApp } from 'firebase'

export const firebase = initializeApp({
  databaseURL: 'https://kanbanfire.firebaseio.com',
  projectId: 'kanbanfire'
})

export const db = firebase.database()
export const tasksRef = db.ref('tasks')
