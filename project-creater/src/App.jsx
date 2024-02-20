import React, { useState } from 'react';
import ProjectSideBar from './Components/ProjectSideBar';
import NewProject from './Components/NewProject';
import NoProjectSelected from './Components/NoProjectSelected';
import SelectedProject from './Components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  // 6
  function handleAddTask(text) {
    setProjectState(prevState => {
     const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
  
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // 7
function handleDeleteTask(id) {
  setProjectState(prevState => {
    return {
      ...prevState,
      tasks: prevState.tasks.filter(
        (task) => task.id !== id),
    };
  });
}

// 4
function handleSelectProject(id) {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: id,
    }
  });
}

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
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };

    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    };
  });
}
// 5
function handleDeleteProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    };
  });
}
// 8 Back
function handleBackProject() {
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    }
  });
}


const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

let content = (
  <SelectedProject
 project={selectedProject}
 onDelete= {handleDeleteProject}
 onBack= {handleBackProject} //
 onAddTask={handleAddTask}
 onDeleteTask={handleDeleteTask}
 tasks={projectState.tasks}
 />
)

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
       onSelectProject={handleSelectProject}
       selectedProjectId={projectState.selectedProjectId}
     />
      {content}
      
    </main>
  )
}

export default App;
