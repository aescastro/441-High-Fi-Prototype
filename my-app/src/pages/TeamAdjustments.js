import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../Adjustments.css'; // Import your CSS file

function MyDragAndDropComponent() {
  const location = useLocation();
  const {numberOfTeams, groupType, groupBy} = location.state;

  useEffect(() => {
    console.log(numberOfTeams);
    console.log(groupType);
    console.log(groupBy);
  }, [numberOfTeams,groupType,groupBy]);

  let data = [
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
  
  if (groupType === 'balance' && groupBy ==="year-level"){
    data = [
      [
        {name:"Zack",yearLevel:2,yoe:7,skills:["HTML","CSS","Redux","Express"]},
        {name:"Derek",yearLevel:2,yoe:6,skills:["JavaScript","Java","Git","Vue.js"]},
        {name:"Liam",yearLevel:2,yoe:5,skills:["Java","SQL","React","AWS"]},
        {name:"Leo",yearLevel:4,yoe:5,skills:["React","Node.js","MongoDB","JIRA"]},
        {name:"Wendy",yearLevel:3,yoe:8,skills:["Java","SQL","AWS","Python"]}	  
      ],
      [
        {name:"Alice",yearLevel:1,yoe:6,skills:["JavaScript","React","CSS","MongoDB"]},
        {name:"Emma",yearLevel:1,yoe:7,skills:["React","Node.js","MongoDB","Git"]},
        {name:"Ivy",yearLevel:1,yoe:8,skills:["Python","Java","React","Angular"]},
        {name:"Mia",yearLevel:1,yoe:5,skills:["HTML","CSS","AWS","Scrum"]},
        {name:"Quinn",yearLevel:1,yoe:5,skills:["JavaScript","HTML","CSS","Webpack"]}
      ],
      [
        {name:"Rachel",yearLevel:2,yoe:7,skills:["Java","SQL","React","JIRA"]},
        {name:"Tom",yearLevel:2,yoe:6,skills:["HTML","CSS","Redux","Express"]},
        {name:"Xavier",yearLevel:2,yoe:8,skills:["JavaScript","Java","Git","Vue.js"]},
        {name:"Yasmine",yearLevel:3,yoe:5,skills:["React","Node.js","Redux","Express"]},
        {name:"Zane",yearLevel:4,yoe:5,skills:["Python","Docker","MongoDB","Angular"]}
      ],
      [
        {name:"Charlie",yearLevel:3,yoe:5,skills:["HTML","CSS","Node.js","Express"]},
        {name:"Grace",yearLevel:3,yoe:6,skills:["Java","SQL","AWS","Vue.js"]},
        {name:"Katie",yearLevel:3,yoe:7,skills:["JavaScript","Java","SQL","Docker"]},
        {name:"Olivia",yearLevel:3,yoe:8,skills:["React","Node.js","Redux","Express"]},
        {name:"Sam",yearLevel:3,yoe:5,skills:["Python","Node.js","Redux","Scrum"]}
      ],
      [
        {name:"David",yearLevel:4,yoe:7,skills:["Python","Docker","Redux","RESTful API"]},
        {name:"Henry",yearLevel:4,yoe:8,skills:["React","Node.js","Java","Webpack"]},
        {name:"Vince",yearLevel:2,yoe:8,skills:["JavaScript","HTML","CSS"]},
        {name:"Peter",yearLevel:4,yoe:6,skills:["Python","Docker","MongoDB","Angular"]},
        {name:"Tina",yearLevel:4,yoe:5,skills:["HTML","CSS","Docker","RESTful API"]}
      ],
      [
        {name:"Uma",yearLevel:1,yoe:6,skills:["React","Node.js","MongoDB","Git"]},
        {name:"Ingrid",yearLevel:3,yoe:7,skills:["Python","Node.js","Redux","Scrum"]},
        {name:"Hank",yearLevel:2,yoe:5,skills:["Java","SQL","React","JIRA"]},
        {name:"Gina",yearLevel:1,yoe:5,skills:["HTML","CSS","Docker","RESTful API"]},
        {name:"Frank",yearLevel:2,yoe:5,skills:["JavaScript","HTML","CSS"]}
      ]
    ];
  };
  

  if (groupType === 'balance' && groupBy ==="yoe") {
    data = [
      [
        {name:"Frank",yearLevel:2,yoe:5,skills:["JavaScript","HTML","CSS"]},
        {name:"Zack",yearLevel:2,yoe:7,skills:["HTML","CSS","Redux","Express"]},
        {name:"Derek",yearLevel:2,yoe:6,skills:["JavaScript","Java","Git","Vue.js"]},
        {name:"Liam",yearLevel:2,yoe:5,skills:["Java","SQL","React","AWS"]},
        {name:"Vince",yearLevel:2,yoe:8,skills:["JavaScript","HTML","CSS"]}
      ],
      [
        {name:"Alice",yearLevel:1,yoe:6,skills:["JavaScript","React","CSS","MongoDB"]},
        {name:"Emma",yearLevel:1,yoe:7,skills:["React","Node.js","MongoDB","Git"]},
        {name:"Ivy",yearLevel:1,yoe:8,skills:["Python","Java","Git","Angular"]},
        {name:"Mia",yearLevel:1,yoe:5,skills:["HTML","CSS","AWS","Scrum"]},
        {name:"Quinn",yearLevel:1,yoe:5,skills:["JavaScript","HTML","CSS","Webpack"]}
      ],
      [
        {name:"Rachel",yearLevel:2,yoe:7,skills:["Java","SQL","React","JIRA"]},
        {name:"Tom",yearLevel:2,yoe:6,skills:["HTML","CSS","Redux","Express"]},
        {name:"Xavier",yearLevel:2,yoe:8,skills:["JavaScript","Java","Git","Vue.js"]},
        {name:"Yasmine",yearLevel:3,yoe:5,skills:["React","Node.js","Redux","Express"]},
        {name:"Zane",yearLevel:4,yoe:5,skills:["Python","Docker","MongoDB","Angular"]}
      ],
      [
        {name:"Charlie",yearLevel:3,yoe:5,skills:["HTML","CSS","Node.js","Express"]},
        {name:"Grace",yearLevel:3,yoe:6,skills:["Java","SQL","AWS","Vue.js"]},
        {name:"Katie",yearLevel:3,yoe:7,skills:["JavaScript","Java","SQL","Docker"]},
        {name:"Olivia",yearLevel:3,yoe:8,skills:["React","Node.js","Redux","Express"]},
        {name:"Sam",yearLevel:3,yoe:5,skills:["Python","Node.js","Redux","Scrum"]}
      ],
      [
        {name:"David",yearLevel:4,yoe:7,skills:["Python","Docker","Redux","RESTful API"]},
        {name:"Henry",yearLevel:4,yoe:8,skills:["React","Node.js","MongoDB","Webpack"]},
        {name:"Leo",yearLevel:4,yoe:5,skills:["React","Node.js","MongoDB","JIRA"]},
        {name:"Peter",yearLevel:4,yoe:6,skills:["Python","Docker","MongoDB","Angular"]},
        {name:"Tina",yearLevel:4,yoe:5,skills:["HTML","CSS","Docker","RESTful API"]}
      ],
      [
        {name:"Uma",yearLevel:1,yoe:6,skills:["React","Node.js","MongoDB","Git"]},
        {name:"Wendy",yearLevel:3,yoe:8,skills:["Java","SQL","AWS","Vue.js"]},
        {name:"Ingrid",yearLevel:3,yoe:7,skills:["Python","Node.js","Redux","Scrum"]},
        {name:"Hank",yearLevel:2,yoe:5,skills:["Java","SQL","React","JIRA"]},
        {name:"Gina",yearLevel:1,yoe:5,skills:["HTML","CSS","Docker","RESTful API"]}
      ],
      [
        {name:"Jake",yearLevel:4,yoe:5,skills:["HTML","CSS","Docker","RESTful API"]},
        {name:"Kelly",yearLevel:1,yoe:5,skills:["JavaScript","React","CSS","MongoDB"]},
        {name:"Pete",yearLevel:2,yoe:6,skills:["JavaScript","HTML","CSS"]},
        {name:"Cathy",yearLevel:1,yoe:7,skills:["HTML","CSS","AWS","Scrum"]},
        {name:"Amy",yearLevel:3,yoe:8,skills:["JavaScript","Java","SQL","Docker"]}
      ],
      [
        {name:"Victor",yearLevel:4,yoe:8,skills:["React","Node.js","MongoDB","JIRA"]},
        {name:"Wendy",yearLevel:1,yoe:5,skills:["HTML","CSS","AWS","Scrum"]},
        {name:"Xander",yearLevel:4,yoe:5,skills:["React","Node.js","MongoDB","Webpack"]},
        {name:"Yara",yearLevel:1,yoe:7,skills:["Python","Java","Git","Angular"]},
        {name:"Zane",yearLevel:4,yoe:6,skills:["Python","Docker","MongoDB","Angular"]}
      ],
      [
        {name:"Samantha",yearLevel:1,yoe:8,skills:["Python","Java","Git","Angular"]},
        {name:"Tom",yearLevel:2,yoe:5,skills:["HTML","CSS","Redux","Express"]},
        {name:"Ursula",yearLevel:3,yoe:5,skills:["JavaScript","Java","SQL","Docker"]},
        {name:"Riley",yearLevel:4,yoe:6,skills:["React","Node.js","MongoDB","Webpack"]},
        {name:"Felix",yearLevel:4,yoe:7,skills:["Python","Docker","MongoDB","Angular"]}
      ],
      [
        {name:"Nathan",yearLevel:4,yoe:8,skills:["Python","Docker","Redux","RESTful API"]},
        {name:"Olive",yearLevel:1,yoe:5,skills:["React","Node.js","MongoDB","Git"]},
        {name:"Pete",yearLevel:2,yoe:5,skills:["JavaScript","HTML","CSS"]},
        {name:"Quincy",yearLevel:3,yoe:6,skills:["Java","SQL","AWS","Vue.js"]},
        {name:"Riley",yearLevel:4,yoe:7,skills:["React","Node.js","MongoDB","Webpack"]}
      ]
    ];
  };
  

  // Extracting specific properties 'name', 'yearLevel', 'yoe' for all the people

  const transformedGroups = data.map(group =>
    group.map(({ name, yearLevel, yoe }) => `${name}\n${yearLevel}\n${yoe}`)
  );

  const initialGroups = [
    { id: 'group0', items: [] },
    ...Array.from({ length: numberOfTeams }, (_, index) => ({
      id: `Group ${index + 1}`,
      items: transformedGroups[index],
    })),
  ];

  const [groups, setGroups] = useState(initialGroups);

  useEffect(() => {
    console.log()
  }, [groups]);

  const allowDrop = (event) => {
    event.preventDefault();
    event.target.classList.add('drag-over');
  };

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.innerText);
  };

  const drop = (event, groupId) => {
    event.preventDefault();
    const data1 = event.dataTransfer.getData("text");
  
    const updatedGroups = groups.map(group => {
      if (group.items.includes(data1)) {
        if (group.id === groupId) return group; // If dropping in the same group, do nothing
        return { ...group, items: group.items.filter(item => item !== data1) };
      } else if (group.id === groupId) {
        return { ...group, items: [...group.items, data1] };
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
            <div className="label">Year</div>
            <div className="label">Experience</div>
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
              <div className='item-text'>
            <span className='word-left'>{item.split(/\s+/)[0]}</span>
            <span className='word-center'>{item.split(/\s+/)[1]}</span>
            <span className='word-right'>{item.split(/\s+/)[2]}</span>
              </div>  
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
            <div className="label">Year</div>
            <div className="label">Experience</div>
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
                  <div className='item-text'>
            <span className='word-left'>{item.split(/\s+/)[0]}</span>
            <span className='word-center'>{item.split(/\s+/)[1]}</span>
            <span className='word-right'>{item.split(/\s+/)[2]}</span>
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
