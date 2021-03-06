# Integration Experiment (Meteor)
An experiment of integrating React, Redux, React Router, React Native, and Meteor.
For Firebase version, click here -> [Integration Experiment (Firebase)](https://github.com/exchange321/integration-experiment-firebase/)

## Current Status
Notice: As Meteor build time in my Surface Pro 3 takes forever and it crashes a lot when building (EBUSY), this project is on-hold until I can get a Mac/Linux or Meteor is fixed. As a result, I will move to my another project: [Integration Experiment (Express)](https://github.com/exchange321/integration-experiment-express) from now on. 
* TeacherPage online, functionality is being added

## Finished
- [x] Initialization
    - [x] ~~Babel Configuration~~
    - [x] ~~PostCSS ( CSSNext ) Integration~~
- [ ] **Transforming App for Firebase to Meteor ( React Web )**
    - [x] ~~Teachers (Read)~~

## Todos
* Core:
    - [ ] **Transforming App for Firebase to Meteor ( React Web )**
        - [ ] Teachers (Edit)
        - [ ] Teachers (Delete)
        - [ ] Topics (Read)
        - [ ] Topics (Edit)
        - [ ] Topics (Delete)
        - [ ] Courses (Read)
        - [ ] Courses (Edit)
        - [ ] Courses (Delete)
        - [ ] User Authentication & Authorization
        - [ ] Adding Restrictions to Editing and Deleting
    - [ ] Transforming App for Firebase to Meteor ( React Native )
    - [ ] Adding Content Modification to Native/Mobile App
    
* Optional: 
    - [ ] Transforming Pure CSS + Bootstrap to Material UI ( React Web )
    - [ ] Allowing Multiple Login Methods ( Email/Password, Facebook, Google )
    - [ ] Integrating User Management
    - [ ] Integrating Offline Storage ( LocalStorage for React Web, AsyncStorage for React Native )
    - [ ] Integrating GraphQL
    
## Logs
* [webpack:webpack](https://atmospherejs.com/webpack/webpack) hasn't been actively updated and it doesn't support the latest Meteor version 1.4+
    - Webpack Integration is dropped in this project
* Meteor for Windows is incredibly slow
    - Separation of client and server is under consideration
