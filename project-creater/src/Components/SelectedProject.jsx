import React from 'react';
import Task from './Task';

function SelectedProject({project, onDelete, onBack, onAddTask, onDeleteTask, tasks}) {

const formattedDate = new Date(project.dueDate).toLocaleDateString('en-Us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
});

  return (
    <div className='w-[35rem] mt-16'>
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
       <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
        </h1>
        {/* new */}
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                {/*  */}
            <button
         className='text-stone-600 hover:text-stone-950'
         onClick={onDelete}
         >
            Delete
        </button>
        {/*  */}
            </li>
            <li>
            <button
        onClick={onBack}
        className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
        >
            Back
        </button>
            </li>
        </menu>
       
       
       </div>
       <p className='mb-4 text-stone-400'>{formattedDate}</p>
       <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
        </header>
        <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}

export default SelectedProject;
