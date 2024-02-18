import React, { useState } from 'react';
import ProjectSideBar from './Components/ProjectSideBar';
import NewProject from './Components/NewProject';
import NoProjectSelected from './Components/NoProjectSelected';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

// 1
function handleStartAddProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null,
    }
  });
}

// 3
function handleCancelAddProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    }
  });
}


// 2
function handleAddProject(projectData) {
  setProjectState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    };
  });
}


let content;

if(projectState.selectedProjectId === null) {
   content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
} else if(projectState.selectedProjectId === undefined) {
   content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
}

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar
       onStartAddProject={handleStartAddProject}
       projects={projectState.projects}
       />
      {content}
      
    </main>
  )
}

export default App;
