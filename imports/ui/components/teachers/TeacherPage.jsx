/**
 * Created by Wayuki on 23-Feb-17.
 */
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Button, ButtonGroup } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Teacher from './teacher/Teacher.jsx';
import TeacherForm from './TeacherForm.jsx';
import ModalContainer from '../common/ModalContainer.jsx';

import * as teacherActions from '../../actions/teacherAction';

import Teachers from '../../../api/Teachers';

@connect(
    ({ teacherPage }) => ({
        ...teacherPage,
    }),
    dispatch => ({
        actions: bindActionCreators(teacherActions, dispatch),
    }),
)
class TeacherPage extends Component {
    static propTypes = {
        teachers: PropTypes.arrayOf(PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            img_src: PropTypes.string.isRequired,
            alias: PropTypes.string.isRequired,
        }).isRequired),
        editing: PropTypes.bool.isRequired,
        modal: PropTypes.shape({
            modalTitle: PropTypes.string.isRequired,
            saveButtonText: PropTypes.string.isRequired,
            teacher: PropTypes.shape({
                name: PropTypes.string.isRequired,
                bio: PropTypes.string.isRequired,
                img_src: PropTypes.string.isRequired,
            }).isRequired,
            errors: PropTypes.objectOf(
                PropTypes.string.isRequired,
            ).isRequired,
        }).isRequired,
        editingTeacherId: PropTypes.string.isRequired,
        actions: PropTypes.shape({
            showForm: PropTypes.func.isRequired,
            hideForm: PropTypes.func.isRequired,
            handleFormFieldChange: PropTypes.func.isRequired,
            saveTeacher: PropTypes.func.isRequired,
            deleteTeacher: PropTypes.func.isRequired,
        }).isRequired,
    };

    static defaultProps = {
        teachers: undefined,
    };

    showForm = (teacherId = null) => {
        if (teacherId) {
            const teacher = this.props.teachers[teacherId];
            this.props.actions.showForm(teacher, `Edit ${teacher.name}`, 'Save Changes', teacherId);
        } else {
            this.props.actions.showForm();
        }
    };

    handleFormFieldChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.props.actions.handleFormFieldChange(key, value);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.actions.saveTeacher();
    };

    handleTeacherDelete = () => {
        this.props.actions.deleteTeacher();
    };

    renderFormSubmitButton = () => {
        const { modal: { saveButtonText, isSavingTeacher } } = this.props;
        return isSavingTeacher ? (
            <Button
                className="btn-teacher-submit loading"
                type="submit"
                color="primary"
                disabled
            >
                Processing...
            </Button>
        ) : (
            <Button
                className="btn-teacher-submit"
                type="submit"
                color="primary"
            >
                {saveButtonText}
            </Button>
        );
    };

    renderFormDeleteButton = () => {
        const { editingTeacherId, modal: { isDeletingTeacher } } = this.props;
        if (!editingTeacherId) {
            return null;
        }
        return isDeletingTeacher ? (
            <Button
                className="btn-teacher-delete loading"
                type="button"
                outline
                color="danger"
                disabled
            >
                Processing...
            </Button>
        ) : (
            <Button
                className="btn-teacher-delete"
                type="button"
                outline
                color="danger"
                onClick={this.handleTeacherDelete}
            >
                Delete Teacher
            </Button>
        );
    };

    render() {
        const { editing, teachers, editingTeacherId, modal, actions: { hideForm } } = this.props;
        return (
            <div className="main-content">
                <h2>Teachers</h2>
                <ul className="clearfix">
                    <ReactCSSTransitionGroup
                        transitionName="block"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        transitionAppear
                        transitionAppearTimeout={500}
                    >
                        {
                            teachers &&
                            Object.keys(teachers).map((teacherId) => {
                                const teacher = teachers[teacherId];
                                return (
                                    <Teacher
                                        key={teacherId}
                                        id={teacherId}
                                        name={teacher.name}
                                        bio={teacher.bio}
                                        img={teacher.img_src}
                                        editing={teacherId === editingTeacherId}
                                        handleTeacherClick={() => this.showForm(teacherId)}
                                    />
                                );
                            })
                        }
                    </ReactCSSTransitionGroup>
                </ul>
                <div className="btn-container text-right">
                    <Button outline color="primary" onClick={() => this.showForm()}>Add Teacher</Button>
                </div>
                <ModalContainer
                    isOpen={editing}
                    toggle={hideForm}
                    handleFormSubmit={this.handleFormSubmit}
                    title={modal.modalTitle}
                    bodyContent={(
                        <TeacherForm
                            name={modal.teacher.name}
                            bio={modal.teacher.bio}
                            img={modal.teacher.img_src}
                            onChange={this.handleFormFieldChange}
                            errors={modal.errors}
                        />
                    )}
                    footerContent={(
                        <ButtonGroup>
                            { this.renderFormDeleteButton() }
                            { this.renderFormSubmitButton() }
                        </ButtonGroup>
                    )}
                />
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('teachers');

    return {
        teachers: Teachers.find({}).fetch(),
    };
}, TeacherPage);
