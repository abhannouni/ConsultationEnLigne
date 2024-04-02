import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';

interface CalendarDay {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}

interface CalendarProps {
  currentDate: Date;
  selectedDate?: Date | null;
  onDateSelect?: (date: Date) => void;
}

function generateCalendarDays(currentDate: Date, selectedDate: Date | null): CalendarDay[] {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();

  const calendarDays: CalendarDay[] = [];

  // Add previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 - i);
    calendarDays.push({ date: format(prevMonthDate, 'yyyy-MM-dd') });
  }

  // Add current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    calendarDays.push({
      date: format(currentMonthDate, 'yyyy-MM-dd'),
      isCurrentMonth: true,
      isToday: format(currentMonthDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd'),
      isSelected: selectedDate ? format(currentMonthDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') : false,
    });
  }

  // Add next month days
  for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
    calendarDays.push({ date: format(nextMonthDate, 'yyyy-MM-dd') });
  }

  return calendarDays;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, selectedDate, onDateSelect }) => {
  const [currentMonthDate, setCurrentDate] = useState<Date>(currentDate);
  const calendarDays = generateCalendarDays(currentMonthDate, selectedDate);

  const handleDateSelect = (date: Date) => {
    console.log('Selected date:', date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = prevDate.getMonth() === 0 ? 11 : prevDate.getMonth() - 1;
      const prevYear = prevMonth === 11 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
      return new Date(prevYear, prevMonth, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = prevDate.getMonth() === 11 ? 0 : prevDate.getMonth() + 1;
      const nextYear = nextMonth === 0 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
      return new Date(nextYear, nextMonth, 1);
    });
  };

  return (
    <div className="w-full max-w-md flex-none border-l border-gray-100 py-6 px-4">
      <div className="flex items-center text-center text-gray-900">
        <button
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={handlePrevMonth}
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex-auto font-semibold">
          {currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={handleNextMonth}
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {calendarDays.map((day, dayIdx) => (
          <button
            key={day.date}
            type="button"
            className={`py-1.5 hover:bg-gray-100 focus:z-10 ${
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
            } ${(day.isSelected || day.isToday) && 'font-semibold'} ${
              day.isSelected && 'text-white'
            } ${!day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900'} ${
              !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400'
            } ${day.isToday && !day.isSelected && 'text-indigo-600'} ${
              dayIdx === 0 && 'rounded-tl-lg'
            } ${dayIdx === 6 && 'rounded-tr-lg'} ${dayIdx === calendarDays.length - 7 && 'rounded-bl-lg'} ${
              dayIdx === calendarDays.length - 1 && 'rounded-br-lg'
            }`}
            onClick={() => handleDateSelect(new Date(day.date))}
          >
            <time
              dateTime={day.date}
              className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${
                day.isSelected && day.isToday && 'bg-indigo-600'
              } ${day.isSelected && !day.isToday && 'bg-gray-900'}`}
            >
              {new Date(day.date).getDate()}
            </time>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
