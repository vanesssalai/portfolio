import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Landing from '../../../assets/Images/GetItDone/Landing.png';
import NewProject from '../../../assets/Images/GetItDone/NewProject.png';
import NewTask from '../../../assets/Images/GetItDone/NewTask.png';
import SubTasks from '../../../assets/Images/GetItDone/SubTasks.png';
import ProjectsPage from '../ProjectsPage';
import Format from "../../../layout/Format/Format";
import './GetItDone.css';

export default function GetItDone() {
    const [navDropdown, setNavDropdown] = useState(false);

    const toggleDropdown = () => {
        setNavDropdown(!navDropdown);
    };

    const handleClickOutside = (event) => {
        if (event.target.closest('.navdropdown') === null) {
            setNavDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Format content={
            <>
                <div className="navdropdown">
                    <FaBars onClick={toggleDropdown} />
                    {navDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-option">
                                <a href="#features">Features</a>
                            </div>
                            <div className="dropdown-option">
                                <a href="#er">Entity Relationship Diagram</a>
                            </div>
                            <div className="dropdown-option">
                                <a href="#conclusion">Conclusion</a>
                            </div>
                        </div>
                    )}
                </div>
                <ProjectsPage
                    title="GetItDone"
                    techStack={['MongoDB', 'Express', 'ReactJS', 'NodeJS', 'TailwindCSS']}
                    liveLink="https://github.com/vanesssalai/GetItDone"
                    sourceLink="https://github.com/vanesssalai/GetItDone"
                />
                <div className="GetItDone-content">
                    <p>GetItDone is a simple MERN to-do list/ glorified project management web application with integrated Google calendar api</p>
                    <div className="gid-landing-container">
                        <img 
                            src={Landing}
                            alt="Landing"
                            className="gid-landing"
                        />
                    </div>

                    <a className="project-links" id="features">Features</a>
                    <h5>CRUD for project and task management</h5>
                    <div className="image-desc-container">
                        <div className="gid-new-container">
                            <img 
                                src={NewProject}
                                alt="NewProject"
                                className="gid-new"
                            />
                            <p className="image-desc">Form to Create New Projects</p>
                        </div>
                        <p className="desc-desc">
                            Users can create new projects directly through the home page of GetItDone. These projects will serve as the housing for the tasks.
                            <br />Projects can be updated and deleted when they are viewed.
                        </p>
                    </div>
                    <div className="image-desc-container">
                        <div className="gid-new-container">
                            <img 
                                src={NewTask}
                                alt="NewTask"
                                className="gid-new"
                            />
                            <p className="image-desc">Form to Create New Tasks</p>
                        </div>
                        <p className="desc-desc">
                            Creation of tasks can be done when viewing projects. Users can add tasks in different levels of importance. Tasks that are due within 7 days and are yet to be completed will be shown in the home page under 'tasks due soon'.
                            <br />Additionally, you can add subtasks to tasks and the tasks will automatically be marked as completed when all subtasks are completed.
                        </p>
                    </div>
                    {/* <div className="image-desc-container">
                        <div className="gid-subtasks-container">
                            <img 
                                src={SubTasks}
                                alt="SubTasks"
                                className="gid-subtasks"
                            />
                            <p className="image-desc">SubTask Viewing</p>
                        </div>
                        <p className="desc-desc">
                        </p>
                    </div> */}
                    <h5>Google API Integration</h5>
                    <p>Used Google API for login and calendar.</p>
                    <a className="project-links" id="er">Entity-Relationship Diagram</a>
                    <p>image will go here</p>
                    <a className="project-links" id="conclusion">Conclusion</a>
                    <p>Overall, this was a fast and relatively simple project I did to get a feel of using a MERN stack. The integration of the Google API was definitely more difficult than initially anticipated. I had fun making the web application.</p>
                </div>
            </>
        } />
    )
}