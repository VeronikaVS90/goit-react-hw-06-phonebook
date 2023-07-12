import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterWrapper, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ filterValue, handleFilterChange }) => {
    const filterID = nanoid();

    return (
        <FilterWrapper>
            <FilterLabel htmlFor={filterID}>Find contacts by name</FilterLabel>
            <FilterInput autoComplete="off" type="text" id={filterID} name="filter" value={filterValue} onChange={handleFilterChange}></FilterInput>
        </FilterWrapper>
    );
};

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};