import {Children, ReactNode, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface FilterProps {
  filterName: string;
  children: ReactNode;
}

const Filter: React.FC<FilterProps> = ({ filterName, children }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div className='select-none'>
      <div className='flex justify-between w-[250px] my-3' onClick={() => setExpanded(!expanded)}>
        <h2 className='text-xl font-medium uppercase'>{filterName}</h2>
        {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </div>
     
      {expanded && <ul>
        {Children.map(children, (child, index) => (
          <li key={index} className='font-light mb-2'>
            <label>
              <input className='mr-2' type="checkbox" />
              {child}
            </label>
          </li>
        ))}
      </ul>}
     
    </div>
  );
};

export default Filter;
