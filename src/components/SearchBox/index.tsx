import React, {  KeyboardEventHandler, useEffect, useRef } from 'react'
import { useState } from "react";
import "../../index.css";
import { MainContainer, Heading, SearchContainer, DropdownRow, DropDown, SearchInner, Input, Button ,Span,Paragraph,EmptyDiv} from '../Style/style';
import data from "../MOCK.json"



const SearchBox = () => {
  const drpdn = useRef<any>()
  
  const [value, setValue] = useState("");
  const [focusIndex, setFoucsedIndex] = useState(-1)

  const capitalCase = (str: string ) => {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length)
  }
  const onChange = (event: any) => {
    
    setValue(event.target.value);

    
  };

  const onSearch = (searchTerm:string) => {
    setValue(searchTerm);
    // our api to fetch the search result

  };
  
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (evnt:any) => {
  let nextIndexCount=0   
    if (evnt.key === 'ArrowDown') {
      nextIndexCount=(focusIndex+1)%data.length
    } 
    if (evnt.key === "ArrowUpper") {
        nextIndexCount = (focusIndex + data.length - 1) % data.length;
    }
    setFoucsedIndex(nextIndexCount)
  }
    useEffect(() => {
    if (!drpdn.current) return;
    drpdn.current.scrollTo({
        left: 0,
        top: focusIndex,
        behavior: 'auto',
      })
   
  }, [focusIndex]);
  useEffect(() => {

  
  }, [value])
  

  return (
    <MainContainer>
      <Heading>Search</Heading>

      <SearchContainer >
        <SearchInner onKeyDown={handleKeyDown} ref={drpdn}>
          <Input type="text" value={value} onChange={onChange} />
          <Button onClick={() => onSearch(value)}> Search </Button>
        </SearchInner>
        <DropDown  >
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();
              const Id = item.ID.toLowerCase()
              const pincode = item.pincoded.toLowerCase()
              const addresss=item.address.toLowerCase()
              const itemss = item.items.toLowerCase()
              
              
              return (
                
                searchTerm  &&
                (fullName.match(searchTerm) ||Id.match(searchTerm) ||pincode.match(searchTerm)||addresss.match(searchTerm)||itemss.match(searchTerm))
              );
      
            })
            .slice(0, 10)
            .map((item, index: number) => {
                    const data = new RegExp(`${capitalCase(value)}|${value.toLowerCase()}|${value.toUpperCase()}|${value}`, 'g')
const datas= item.full_name.split(data)
              
          
     
                        
                return (
           
             
                  <DropdownRow
                    onClick={() => onSearch(item.full_name || item.ID || item.pincoded || item.address || item.items)}
                    ref={index === focusIndex ? drpdn : null}
                    className={index === focusIndex ? "drpdn" : ""}
                    key={item.full_name || item.ID || item.pincoded || item.address || item.items}
                  >
                    {item.ID.length ? 
                      <Paragraph>
                        <Span style={{ color: "red" }}>{value}</Span>{datas}
             
                        <Span> {item.ID}</Span>
                        <Span> {item.pincoded}</Span>,
                        <Span> {item.address},</Span>
                        <Span>{item.items}
                        </Span>
                      </Paragraph>
:<EmptyDiv>No Data is there</EmptyDiv>                  
                   
                    }   </DropdownRow>
                )
              
            })}
        </DropDown>
      </SearchContainer>
    </MainContainer>
  );
  
}

export default SearchBox

