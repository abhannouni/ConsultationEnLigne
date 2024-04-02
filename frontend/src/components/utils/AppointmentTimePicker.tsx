import React from 'react';

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

const AppointmentTimePicker: React.FC = () => {
  const availableTimes = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
  const reservedTimes = ['10:00 AM', '3:00 PM'];

  const handleTimeSelect = (time: string) => {
    console.log(`Selected time: ${time}`);
    // Perform additional actions, such as updating the appointment state
  };

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