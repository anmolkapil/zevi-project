import {Children, ReactNode, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface FilterProps {
  filterName: string;
  children: ReactNode;
}

const Filter: React.FC<FilterProps> = ({ filterName, children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div onClick={() => setExpanded(!expanded)}>
      <div className='flex justify-between'>
        <h2 className='text-xl font-medium uppercase mb-1'>{filterName}</h2>
        {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </div>
     
      {expanded && <ul>
        {Children.map(children, (child, index) => (
          <li key={index} className='font-light my-2'>
            <label>
              <input type="checkbox" />
              {child}
            </label>
          </li>
        ))}
      </ul>}
     
    </div>
  );
};

export default Filter;
