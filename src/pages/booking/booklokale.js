import React, {useState} from 'react'
import { Grid, GridCol } from '@mantine/core'
import RoomCard1 from '@/components/molecules/RoomCard1'
import RoomCard2 from '@/components/molecules/RoomCard2'
import RoomCard3 from '@/components/molecules/RoomCard3'
import RoomCard4 from '@/components/molecules/RoomCard4'
import ButtonBack from '@/components/atoms/ButtonBack'
import ButtonNext from '@/components/atoms/ButtonNext'



const booklokale = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleRoomSelect = (roomName) => {
        setSelectedRoom(roomName);
    };

  return (
    <>   

    <h3>CHOOSE A ROOM</h3>
    
    <Grid className='RoomCards1234'>
        <GridCol span={3}>
            <RoomCard1 selected={selectedRoom === 'Room1'} onClick={() => handleRoomSelect('Room1')} />
        </GridCol>

        <GridCol span={3}>
            <RoomCard2 selected={selectedRoom === 'Room2'} onClick={() => handleRoomSelect('Room2')}/>
         </GridCol>

        <GridCol span={3}>
            <RoomCard3 selected={selectedRoom === 'Room3'} onClick={() => handleRoomSelect('Room3')}/>
        </GridCol>

        <GridCol span={3}>
            <RoomCard4 selected={selectedRoom === 'Room4'} onClick={() => handleRoomSelect('Room4')}/>
        </GridCol>

    </Grid>

    <Grid className='knapFremOgTilbage'>
        <GridCol span={2} offset={1}><ButtonBack/></GridCol>
        <GridCol span={2} offset={7}><ButtonNext/></GridCol>
    </Grid>
    
    
    </>
  );
};

export default booklokale;