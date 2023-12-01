import React, { useState } from 'react';
import '../Adjustments.css'; // Import your CSS file

function MyDragAndDropComponent() {
  const [groups, setGroups] = useState([
    { id: 'group1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { id: 'group2', items: [] },
    { id: 'group3', items: [] },
    { id: 'group4', items: ['Item 4']}
    // Add more groups here...
  ]);

  const allowDrop = (event) => {
    event.preventDefault();
    event.target.classList.add('drag-over');
  };

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.innerText);
  };

  const drop = (event, groupId) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");

    const updatedGroups = groups.map(group => {
      if (group.items.includes(data)) {
        if (group.id === groupId) return group; // If dropping in the same group, do nothing
        return { ...group, items: group.items.filter(item => item !== data) };
      } else if (group.id === groupId) {
        return { ...group, items: [...group.items, data] };
      }
      return group;
    });

    setGroups(updatedGroups);
    event.target.classList.remove('drag-over');
  };

  return (
    <div className="container">
      <div className="group-left">
        <h2>Group 1</h2>
        <div
          className="group"
          id="group1"
          onDrop={(e) => drop(e, 'group1')}
          onDragOver={allowDrop}
        >
          {groups.find(group => group.id === 'group1').items.map((item, index) => (
            <div
              key={index}
              className="item"
              draggable
              onDragStart={drag}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="group-right">
        {groups.slice(1).map((group, index) => (
          <div className="sub-group" key={index}>
            <h3>{group.id}</h3>
            <div
              className="group"
              id={group.id}
              onDrop={(e) => drop(e, group.id)}
              onDragOver={allowDrop}
            >
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="item"
                  draggable
                  onDragStart={drag}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDragAndDropComponent;