import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../Adjustments.css'; // Import your CSS file
import { group20YearLevel, balance30Skill, balance50Yoe } from '../constants/mockData';

function MyDragAndDropComponent() {
  const location = useLocation();
  const {numberOfTeams, groupType, groupBy} = location.state;
  
  const determineData = () => {
      if (groupType == 'group' && groupBy == 'year-level') {
        return group20YearLevel;
      } else if (groupType == 'balance' && groupBy == 'year-level') {
        return balance30Skill;
      } else if (groupType == 'balance' && groupBy == 'yoe') {
        return balance50Yoe;
      }
  }
  const [data, setData] = useState(determineData());

  

  useEffect(() => {
      setData(determineData());
  }, [numberOfTeams,groupType,groupBy]);
  

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