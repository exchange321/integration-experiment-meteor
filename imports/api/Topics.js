/**
 * Created by Wayuki on 20-Feb-17.
 */
import { Mongo } from 'meteor/mongo';

const Topics = new Mongo.Collection('topics');

Topics.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

Topics.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

const TopicSchema = new SimpleSchema({
    alias: { type: String },
    name: { type: String },
});

Topics.attachSchema(TopicSchema);

export default Topics;
