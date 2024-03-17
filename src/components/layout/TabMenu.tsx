import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState([
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Write' },
    { id: 4, label: 'Charts' },
  ]);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const newTabs = Array.from(tabs);
    const [removed] = newTabs.splice(result.source.index, 1);
    newTabs.splice(result.destination.index, 0, removed);
    setTabs(newTabs);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tabs">
          {(props) => (
            <Tabs
              ref={props.innerRef}
              {...props.droppableProps}
              value={activeTab}
              //onChange={handleTabChange} Not used
            >
              {tabs.map(({ id, label }, index) => (
                <Draggable
                  key={id}
                  draggableId={`id-${id}`} // must be a string
                  index={index}
                  disableInteractiveElementBlocking={true}
                >
                  {(props) => (
                    <Tab
                      ref={props.innerRef}
                      {...props.draggableProps}
                      {...props.dragHandleProps}
                      label={label}
                      onClick={() => setActiveTab(index)} // Set active tab like this
                    />
                  )}
                </Draggable>
              ))}
              {props.placeholder}
            </Tabs>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TabMenu;
