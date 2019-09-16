import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = props => {
  const { headerRow } = props;
  return (
    <div className="table-header">
      {
        headerRow.map(header => (
          <div
            key={`${header.id}-${header.table}`}  
            className={
              header.isSorted
                ? `${header.class} table-header--is-sorted`
                : `${header.class}`
            }
          >
            {header.col}
          </div>
        ))
      }      
    </div>
  )
}

TableHeader.propTypes = {
  headerRow: PropTypes.array,
}

export default TableHeader;
