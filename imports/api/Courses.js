/**
 * Created by Wayuki on 20-Feb-17.
 */
import { Mongo } from 'meteor/mongo';

const Courses = new Mongo.Collection('courses');

Courses.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

Courses.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

const CourseSchema = new SimpleSchema({
    alias: { type: String },
    title: { type: String },
    description: { type: String },
    img_src: { type: String },
    topic: { type: String },
});

Courses.attachSchema(CourseSchema);

export default Courses;
