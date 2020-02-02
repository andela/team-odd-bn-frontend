import React from 'react';

export default (
  availlableRoomTypes,
  accommodationId,
  availlableRooms,
  roomId,
  updateBookAccommodationInput,
  roomType,
) => [
  {
    label: 'Room type',
    inputField:
  <select
    key="selectRoomType"
    id="selectRoomType"
    onChange={(e) => updateBookAccommodationInput({ roomType: e.target.value })}
    disabled={!accommodationId}
  >
    <option>Select room type</option>
    {availlableRoomTypes
       && availlableRoomTypes.map((room) => (
         <option value={room} key={room}>
           {room}
         </option>
       ))}
  </select>,
  },
  {
    label: 'Room name',
    inputField:
  <select
    key="selectRoomName"
    id="selectRoomName"
    onChange={(e) => updateBookAccommodationInput({ roomId: parseInt(e.target.value, 10) })}
    disabled={!roomType}
  >
    <option>Select room name</option>
    {availlableRooms
       && availlableRooms.map((room) => (
         <option value={room.id} key={room.name}>
           {room.name}
         </option>
       ))}
  </select>,
  },
  {
    label: 'Check-in date',
    inputField: <input
      key="checkInDate"
      id="checkInDate"
      onChange={(e) => updateBookAccommodationInput({ checkInDate: e.target.value })}
      disabled={!roomId}
      type="date"
    />,
  },
  {
    label: 'Check-out date',
    inputField: <input
      key="checkOutDate"
      id="checkOutDate"
      onChange={(e) => updateBookAccommodationInput({ checkOutDate: e.target.value })}
      disabled={!roomId}
      type="date"
    />,
  },
];
