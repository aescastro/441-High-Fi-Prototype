import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../Adjustments.css'; // Import your CSS file

function MyDragAndDropComponent() {
  const location = useLocation();
  const {numberOfTeams, groupType, groupBy} = location.state;

  const data = [
    [
      { name: 'Alice', yearLevel: 1, yoe: 3, skills: ['JavaScript', 'React', 'CSS', 'MongoDB'] },
      { name: 'Emma', yearLevel: 1, yoe: 4, skills: ['React', 'Node.js', 'MongoDB', 'Git'] },
      { name: 'Ivy', yearLevel: 1, yoe: 7, skills: ['Python', 'Java', 'Git', 'Angular'] },
      { name: 'Mia', yearLevel: 1, yoe: 6, skills: ['HTML', 'CSS', 'AWS', 'Scrum'] },
      { name: 'Quinn', yearLevel: 1, yoe: 9, skills: ['JavaScript', 'HTML', 'CSS', 'Webpack'] },
    ],
    [
      { name: 'Bob', yearLevel: 2, yoe: 8, skills: ['Java', 'SQL', 'React', 'AWS'] },
      { name: 'Frank', yearLevel: 2, yoe: 1, skills: ['JavaScript', 'HTML', 'CSS'] },
      { name: 'Jack', yearLevel: 2, yoe: 3, skills: ['HTML', 'CSS', 'Redux', 'Express'] },
      { name: 'Noah', yearLevel: 2, yoe: 4, skills: ['JavaScript', 'Java', 'Git', 'Vue.js'] },
      { name: 'Rachel', yearLevel: 2, yoe: 7, skills: ['Java', 'SQL', 'React', 'JIRA'] },
    ],
    [
      { name: 'Charlie', yearLevel: 3, yoe: 2, skills: ['HTML', 'CSS', 'Node.js', 'Express'] },
      { name: 'Grace', yearLevel: 3, yoe: 5, skills: ['Java', 'SQL', 'AWS', 'Vue.js'] },
      { name: 'Katie', yearLevel: 3, yoe: 8, skills: ['JavaScript', 'Java', 'SQL', 'Docker'] },
      { name: 'Olivia', yearLevel: 3, yoe: 1, skills: ['React', 'Node.js', 'Redux', 'Express'] },
      { name: 'Sam', yearLevel: 3, yoe: 3, skills: ['Python', 'Node.js', 'Redux', 'Scrum'] },
    ],
    [
      { name: 'David', yearLevel: 4, yoe: 6, skills: ['Python', 'Docker', 'Redux', 'RESTful API'] },
      { name: 'Henry', yearLevel: 4, yoe: 9, skills: ['React', 'Node.js', 'MongoDB', 'Webpack'] },
      { name: 'Leo', yearLevel: 4, yoe: 2, skills: ['React', 'Node.js', 'MongoDB', 'JIRA'] },
      { name: 'Peter', yearLevel: 4, yoe: 5, skills: ['Python', 'Docker', 'MongoDB', 'Angular'] },
      { name: 'Tina', yearLevel: 4, yoe: 2, skills: ['HTML', 'CSS', 'Docker', 'RESTful API'] },
    ],
];

  // Extracting specific properties 'name', 'yearLevel', 'yoe' for all the people

  const transformedGroups = data.map(group =>
    group.map(({ name, yearLevel, yoe }) => `${name} ${yearLevel} ${yoe}`)
  );
  
  console.log(transformedGroups);

  const initialGroups = [
    { id: 'group0', items: [] },
    ...Array.from({ length: numberOfTeams }, (_, index) => ({
      id: `Group ${index + 1}`,
      items: transformedGroups[index],
    })),
  ];

  const [groups, setGroups] = useState(initialGroups);

  useEffect(()=> {
    console.log('Number Of Teams: ', numberOfTeams);
    console.log('Group Type: ', groupType);
    console.log('Group By: ', groupBy);
  }, [numberOfTeams, groupType, groupBy]);

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
        <div className="pool-header">
          <h2>Pool</h2>
        </div>
          <div className="label-row">
            <div className="label">Name</div>
            <div className="label">Experience</div>
            <div className="label">Year</div>
        </div>
  
        <div
          className="group"
          id="group0"
          onDrop={(e) => drop(e, 'group0')}
          onDragOver={allowDrop}
        >
          {groups.find(group => group.id === 'group0').items.map((item, index) => (
            <div
              key={index}
              className="item"
              draggable
              onDragStart={drag}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="group-right">
        {groups.slice(1).map((group, index) => (
          <div className="sub-group" key={index}>
            <div>
            <h3>{group.id}</h3>
            </div>
            <div className="label-row">
            <div className="label">Name</div>
            <div className="label">Experience</div>
            <div className="label">Year</div>
            </div>
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
                  <div className="item-text">
                  {item}
                  </div>
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