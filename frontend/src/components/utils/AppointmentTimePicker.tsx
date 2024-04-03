import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentThunk } from '../../redux/thunks/AppointmentThunk';

interface TimeCardProps {
  time: string;
  isAvailable: boolean;
  onTimeSelect: (time: string) => void;
}

const TimeCard: React.FC<TimeCardProps> = ({ time, isAvailable, onTimeSelect }) => {
  const handleTimeSelect = () => {
    
    if (isAvailable) {
      onTimeSelect(time);
    }
  };

  const buttonStyle = `px-4 py-2 rounded-md text-white font-semibold ${
    isAvailable ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
  }`;

  return (
    <button
      onClick={handleTimeSelect}
      disabled={!isAvailable}
      className={buttonStyle}
    >
      {time}
    </button>
  );
};

const AppointmentTimePicker: React.FC = (selectedDate , id) => {
  const dispatch = useDispatch();
  const appointments  = useSelector((state: any) => state.Appointment.appointments);
  const currentDate = new Date();
  if (!selectedDate) {
    selectedDate = currentDate.toISOString();
  }
  useEffect(() => {
    dispatch(getAppointmentThunk(selectedDate , id));
  }, [dispatch]);
  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const handleTimeSelect = (time: string) => {
    console.log(`Selected time: ${time}`);
    // Perform additional actions, such as updating the appointment state
  };
  const reservedTimes = appointments.map((appointment: any) => appointment.time);


  return (
    <div className="grid grid-cols-3 gap-4">
      {availableTimes.map((time) => (
        <TimeCard
          key={time}
          time={time}
          isAvailable={!reservedTimes.includes(time)}
          onTimeSelect={handleTimeSelect}
        />
      ))}
    </div>
  );
};

export default AppointmentTimePicker;