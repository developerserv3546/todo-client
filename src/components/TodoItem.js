import React, {useState} from "react";
import {Modal} from "react-bootstrap";

export default function TodoItem(props) {

    const [isNameEditMode, setNameEditMode] = useState(false);
    const [isDescriptionEditMode, setDescriptionEditMode] = useState(false);
    const [name, setName] = useState(props.task.name);
    const [description, setDescription] = useState(props.task.description);
    const [show, setShow] = useState(false);

    const onNameClick = () => {
        if (!isNameEditMode) {
            setNameEditMode(true)
        }
    }

    const onDescriptionClick = () => {
        if (!isDescriptionEditMode) {
            setDescriptionEditMode(true)
        }
    }

    const onCancelClick = () => {
        setNameEditMode(false);
        setDescriptionEditMode(false);
        setName(props.task.name);
        setDescription(props.task.description);
    }

    const onSaveClick = () => {
        props.updateTask(props.task._id, name, description);
        setNameEditMode(false);
        setDescriptionEditMode(false);
    }

    const onNameChange = e => {
        setName(e.target.value)
    }

    const onDescriptionChange = e => {
        setDescription(e.target.value)
    }

    const onDeleteClick = () => {
        setShow(true);
    }

    const onConfirmDeleteClick = () => {
        props.deleteTask(props.task._id);
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Are you sure you want to delete this task?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Name:</strong> {props.task.name}</p>
                    <p><strong>Description:</strong> {props.task.description}</p>
                    <div className="text-center my-2">
                        <button type="button" onClick={() => onConfirmDeleteClick()}
                                className="btn btn-secondary mr-2 mw-120">Delete
                        </button>
                        <button onClick={() => setShow(false)} type="button"
                                className="btn btn-secondary mw-120">Cancel
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="card m-2">
                <div className="card-body">
                    <div onClick={() => onNameClick()}>
                        {isNameEditMode ?
                            <><label>Name</label>
                                <input onChange={onNameChange} type="text" className="form-control mb-2"
                                       placeholder="Name" value={name}/> </> :
                            <h5 className="card-title">{props.task.done ? <>&#9989;</> : <>&#10071;</>} {props.task.name}  </h5>

                        }
                    </div>
                    <div onClick={() => onDescriptionClick()}>
                        {isDescriptionEditMode ?
                            <><label>Description</label>
                                <input onChange={onDescriptionChange} type="text" className="form-control mb-2"
                                       placeholder="Description"
                                       value={description}/></> :
                            <p className="card-text">{props.task.description}</p>
                        }
                    </div>
                    <div className="container-fluid w-100 text-right">
                        {isNameEditMode || isDescriptionEditMode ?
                            <div>
                                <button onClick={() => onSaveClick()} type="button"
                                        className="btn btn-secondary mr-2 mw-120">Save
                                </button>
                                <button onClick={() => onCancelClick()} type="button"
                                        className="btn btn-secondary mw-120">Cancel
                                </button>
                            </div>
                            :
                            <div>
                                <button type="button"
                                        onClick={() => props.updateTaskStatus(props.task._id, !props.task.done)}
                                        className="btn btn-secondary mr-2 mw-120">{props.task.done ? 'Undone' : 'Done'}</button>
                                <button onClick={() => onDeleteClick()} type="button"
                                        className="btn btn-secondary mw-120">Delete
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};