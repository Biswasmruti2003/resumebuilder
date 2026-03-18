import { useState } from "react";

export default function Form({ data, setData }) {

    const [skill, setSkill] = useState("");

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSkillChange = (e) => {
        setSkill(e.target.value);
    };

    const addSkill = () => {
        setData({ ...data, skills: [...data.skills, skill] });
    };

    return (
        <div>
            <form>
                <h1 className="text-2xl">Form</h1>
                <hr />
                <div className="mb-3 fw-bold">
                    <label for="name" className="form-label">Name : </label>
                    <input className="form-control" name="name" placeholder="Entre ur Name" onChange={handleChange} id="name" />
                </div>
                <div className="mb-3 fw-bold">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Email" onChange={handleChange} id="email" />
                </div>
                <div className="mb-3 fw-bold">
                    <label for="summary" className="form-label">Summary</label>
                    <textarea className="form-control" name="summary" placeholder="Enter Summary" onChange={handleChange} id="summary" />
                </div>

                <h5>Skills</h5>
                <input type="text" className="form-control mb-3" onChange={(e) => handleSkillChange(e)} value={skill} />
                <div className="">
                    <button className="btn btn-primary float-end" onClick={addSkill}>Add Skill</button>
                </div>
            </form>
        </div>

    );
}