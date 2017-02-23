/**
 * Created by Wayuki on 23-Feb-17.
 */
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

import Teachers from '../imports/api/Teachers';

Meteor.methods({
    editTeacher(teacher) {
        check(teacher, {
            _id: Match.Maybe(String),
            name: String,
            bio: String,
            img_src: String,
            alias: String,
        });

        if (teacher._id) {
            Teachers.update(teacher._id, { $set: teacher });
        } else {
            console.log('Adding...');
        }
    },
});
