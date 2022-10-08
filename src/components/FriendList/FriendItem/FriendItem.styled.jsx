import styled from '@emotion/styled'

export const Marker = styled.span`
position: absolute;
top: 50%;
left: -10%;
display: block;
    width: 15px;
    height: 15px;
    
    border-radius: 50%;
     ${p =>
    p.isOnline
      ? `
          background-color: green;
        `
      : `
          background-color: red;
        `}
`

export const FriendListItem = styled.li`
position: relative;
display: flex;
background-color:#224651;
margin: 10px;
padding: 10px;
border-radius: 12px;
width: 200px;
color: #ffffff;
font-weight: 700;
font-size: 18px;
    
`