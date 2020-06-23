import React, {useState} from "react";

export default function TodoForm(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onNameChange = e => {
        setName(e.target.value)
    }

    const onDescriptionChange = e => {
        setDescription(e.target.value)
    }

    const onSubmitClick = () => {
        props.createTask(name, description);
        setName('');
        setDescription('');
    }

    return (
        <div className="mx-2 my-4">
            <div className="form-group">
                <label>Name</label>
                <input onChange={onNameChange} type="text" className="form-control" placeholder="Enter Name..."
                       value={name}/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input onChange={onDescriptionChange} type="text" className="form-control"
                       placeholder="Enter Description..." value={description}/>
            </div>
            <button onClick={() => onSubmitClick()} type="submit" className="btn btn-secondary mw-120"
                    disabled={name.trim() === '' || description.trim() === ''}>Submit
            </button>
        </div>
    );
};