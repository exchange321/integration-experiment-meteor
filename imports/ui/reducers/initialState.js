/**
 * Created by Wayuki on 23-Feb-17.
 */
export default {
    appPage: {
        notification: {
            hasNotification: false,
            type: '',
            msg: '',
        },
    },
    teacherPage: {
        editing: false,
        modal: {
            modalTitle: 'New Teacher',
            saveButtonText: 'Add Teacher',
            teacher: {
                name: '',
                bio: '',
                img_src: '',
            },
            errors: {},
            isSavingTeacher: false,
            isDeletingTeacher: false,
        },
        editingTeacherId: '',
    },
};