import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';

export default function BasicDatePicker({ onDateChange, defaultDate }) {
  const [value, setValue] = React.useState(defaultDate ? dayjs(defaultDate) : dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
        <DateField
          label="Birth Date"
          value={value}
          name="birthday"
          onChange={(newValue) => {
            setValue(newValue);
            onDateChange(newValue);
          }}
          format="MM-DD-YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
