import styled from "styled-components";
import { UploadDate } from "../utilis/Filters/UploadDate";
import { SearchParams } from "../Pages/SearchVideos";
import SearchFilter from "./SearchFilter";
import { Type } from "../utilis/Filters/Type";
import { Duration } from "../utilis/Filters/Duration";
import { Features } from "../utilis/Filters/Features";
import { SortBy } from "../utilis/Filters/SortBy";

interface Iprops {
  onFilterChange: (value: SearchParams) => void;
  filterValues: SearchParams;
}

const FilterCard = ({ onFilterChange, filterValues }: Iprops) => {
  const onValueChange = (field: keyof SearchParams, newValue: string) => {
    onFilterChange({
      ...filterValues,
      [field]: newValue,
    });
  };
  return (
    <FilterCardWrapper>
      <FilterSection>
        <P>UPLOAD DATE</P>
        {UploadDate.map((text) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={(newValue:string) => {
                onValueChange("uploadDate", newValue);
              }}
              isActive={filterValues.uploadDate === "This Week"}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>TYPE</P>
        {Type.map((text:any) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={(newValue:any) => {
                onValueChange("videoType", newValue);
              }}
              isActive={filterValues.uploadDate === "This Week"}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>Duration</P>
        {Duration.map((text:any) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={(newValue:any) => {
                onValueChange("videoType", newValue);
              }}
              isActive={filterValues.uploadDate === "This Week"}
            />
          );
        })}
      </FilterSection>
      <FilterSection>
        <P>Features</P>
        {Features.map((text:any) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={(newValue:any) => {
                onValueChange("videoType", newValue);
              }}
              isActive={filterValues.uploadDate === "This Week"}
            />
          );
        })}        
      </FilterSection>
      <FilterSection>
        <P>Sort by</P>
        {SortBy.map((text:any) => {
          return (
            <SearchFilter
              text={text.tab}
              key={text.id}
              onChange={(newValue:any) => {
                onValueChange("videoType", newValue);
              }}
              isActive={filterValues.uploadDate === "This Week"}
            />
          );
        })}        
      </FilterSection>
    </FilterCardWrapper>
  );
};

const FilterCardWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  margin: 20px 0;
`;
const FilterSection = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const P = styled.p`
    font-weight : 700;
  padding-bottom: 10px;
  border-bottom: 1px solid gray};
  font-size: 14px;
`;

export default FilterCard;
