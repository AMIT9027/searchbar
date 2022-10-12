import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Heading = styled.h1`
`
export const SearchContainer=styled.div`  
    display: flex;
max-width:500px;
    flex-direction: column;
 width: 100%;
overflow:hidden
`

export const SearchInner = styled.div`
display:flex;
`
export const DropdownRow =styled.div`
    cursor: pointer;
    text-align: start;
    margin: 2px 0;
background-color:skyblue;

    &:hover {
   background-color:yellow;
  }
`
export const DropDown = styled.div`
height:100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
.drpdn{
 background-color:red
}

`
export const Input= styled.input `
    width: 500px;
`
export const Button= styled.button `
  
`
export const Span= styled.span `
  
`
export const Paragraph= styled.p `
  
`
export const EmptyDiv= styled.div `
  
`
