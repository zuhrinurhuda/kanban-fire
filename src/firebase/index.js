import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  databaseURL: 'https://hacktiv8-186802.firebaseio.com',
  projectId: 'hacktiv8-186802'
})

export const db = firebaseApp.database()

export const tasksRef = db.ref('tasks')
