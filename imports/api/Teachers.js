/**
 * Created by Wayuki on 20-Feb-17.
 */
import { Mongo } from 'meteor/mongo';

const Teachers = new Mongo.Collection('teachers');

Teachers.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

Teachers.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

const TeacherSchema = new SimpleSchema({
    alias: { type: String },
    name: { type: String },
    bio: { type: String },
    img_src: { type: String },
});

Teachers.attachSchema(TeacherSchema);

export default Teachers;
