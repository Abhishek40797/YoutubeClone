import React from 'react';
import styled from 'styled-components';
import { IFilter } from '../Interfaces';

const Filters = (props:IFilter) => {
    const {filters,handleFilter} = props
    return (
        <>
            {
                filters.map((filter,i)=>{
                    return (
                        <FilterType key={i}>
                            <FilterHeading>{filter.heading}</FilterHeading>
                            <FilterName onClick={()=>handleFilter(filter.filter1)}>{filter.filter1}</FilterName>
                            <FilterName onClick={()=>handleFilter(filter.filter2)}>{filter.filter2}</FilterName>
                            <FilterName onClick={()=>handleFilter(filter.filter3)}>{filter.filter3}</FilterName>
                            <FilterName onClick={()=>handleFilter(filter.filter4)}>{filter.filter4}</FilterName>
                            <FilterName onClick={()=>handleFilter(filter.filter5)}>{filter.filter5}</FilterName>
                            <FilterName>{filter.filter6}</FilterName>
                            <FilterName>{filter.filter7}</FilterName>
                            <FilterName>{filter.filter8}</FilterName>
                            <FilterName>{filter.filter9}</FilterName>
                            <FilterName>{filter.filter10}</FilterName>
                            <FilterName>{filter.filter11}</FilterName>
                        </FilterType>
                    )
                })
            }
        </>
    )
}


export default Filters;

const FilterType = styled.div`
    display : flex;
    flex-direction : column;
    gap : 10px;
    width : 15%;
`

const FilterHeading = styled.h4`
    font-size : 13px;
    padding-bottom : 10px;
    border-bottom : 1px solid #a9a9a9;
`

const FilterName = styled.p`
    font-size : 13px;
    cursor : pointer;
`