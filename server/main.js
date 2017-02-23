import { Meteor } from 'meteor/meteor';

import Teachers from '../imports/api/Teachers';

Meteor.startup(() => {
    // code to run on server at startup
    Meteor.publish('teachers', () => (
        Teachers.find({})
    ));
});
